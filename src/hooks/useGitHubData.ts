import { useState, useEffect } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}

export interface GitHubProfileStats {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string;
}

// Fallback data when API rate limit (60 req/hr on unauthenticated IP) occurs
const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: 'MCDM-Intelligence-Platform',
    description: 'Multi-criteria decision making analytical engine built with Spring Boot, PostgreSQL, and algorithmic evaluation.',
    html_url: 'https://github.com/krushnaDhage',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Java',
    updated_at: '2026-03-01T00:00:00Z',
    topics: ['java', 'spring-boot', 'mcdm', 'postgresql', 'decision-analysis']
  },
  {
    id: 2,
    name: 'Student-Internship-Evaluation-System',
    description: 'Academic internship lifecycle management, mentor evaluation rubrics, and administrative reporting.',
    html_url: 'https://github.com/krushnaDhage',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Java',
    updated_at: '2026-02-15T00:00:00Z',
    topics: ['spring-boot', 'mysql', 'spring-security', 'react']
  },
  {
    id: 3,
    name: 'Apna-Shopy-Ecommerce',
    description: 'Full-stack online shopping platform with cart lifecycle, product catalog, and backend transactional flow.',
    html_url: 'https://github.com/krushnaDhage',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Java',
    updated_at: '2026-01-20T00:00:00Z',
    topics: ['ecommerce', 'spring-boot', 'react', 'rest-api']
  },
  {
    id: 4,
    name: 'Banking-Transaction-Management',
    description: 'ACID transaction management core, optimistic locking, and double-entry ledger bookkeeping architecture.',
    html_url: 'https://github.com/krushnaDhage',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Java',
    updated_at: '2026-03-10T00:00:00Z',
    topics: ['java', 'banking', 'spring-boot', 'concurrency', 'transactions']
  }
];

export const useGitHubData = (username: string = 'krushnaDhage') => {
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);
  const [profile, setProfile] = useState<GitHubProfileStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isUsingFallback, setIsUsingFallback] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        // Public endpoints - without auth token to prevent secret leaks
        const [userRes, reposRes] = await Promise.allSettled([
          fetch(`https://api.github.com/users/${username}`, {
            headers: { Accept: 'application/vnd.github.v3+json' }
          }),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
            headers: { Accept: 'application/vnd.github.v3+json' }
          })
        ]);

        if (!isMounted) return;

        let gotLiveRepos = false;

        if (userRes.status === 'fulfilled' && userRes.value.ok) {
          const userData = await userRes.value.json();
          setProfile({
            public_repos: userData.public_repos || 0,
            followers: userData.followers || 0,
            following: userData.following || 0,
            avatar_url: userData.avatar_url,
            bio: userData.bio || 'Java Backend & Full-Stack Developer'
          });
        }

        if (reposRes.status === 'fulfilled' && reposRes.value.ok) {
          const reposData = await reposRes.value.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            setRepos(reposData);
            gotLiveRepos = true;
            setIsUsingFallback(false);
          }
        }

        if (!gotLiveRepos) {
          setIsUsingFallback(true);
        }
      } catch {
        if (isMounted) {
          setIsUsingFallback(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { repos, profile, loading, isUsingFallback };
};
