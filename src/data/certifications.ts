import type { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-redhat-openshift',
    title: 'Red Hat OpenShift Development',
    issuer: 'Red Hat',
    status: 'Verified',
    description:
      'Verified coursework covering containerized application deployment, Kubernetes/OpenShift cluster workflows, pod scaling, source-to-image (S2I) pipelines, and enterprise cloud architecture.',
    skillsGained: [
      'Containerization & Pod Management',
      'Kubernetes Architecture & Orchestration',
      'OpenShift Enterprise Deployment Models',
      'Application Lifecycle Automation'
    ]
  }
];
