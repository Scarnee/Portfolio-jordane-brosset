# Portfolio Jordane Brosset

Ce dépôt contient le code source et l’infrastructure du site portfolio personnel de Jordane Brosset, mettant en avant ses compétences en développement web et DevOps.

## Fonctionnalités

- **Frontend** : React (Vite), SCSS, i18n (français, anglais, espagnol), design responsive, transitions animées, présentation de projets.
- **Contact** : Intégration EmailJS pour contact direct.
- **DevOps** : Frontend dockerisé, configuration Nginx, playbook Ansible pour le déploiement, et Terraform pour la gestion de l’infrastructure AWS.
- **CI/CD** : Workflow GitHub Actions pour le déploiement automatisé sur AWS EC2.
- **Monitoring** : Monitoring de l’application avec Prometheus et Grafana.

## Structure du projet

```
.
├── frontend/         # Application React (Vite, SCSS, i18n)
├── infra/
│   ├── ansible/      # Playbook & rôles Ansible pour le provisioning/déploiement
│   └── terraform/    # Scripts Terraform pour la création d’EC2 AWS
├── monitoring/       # Configuration Prometheus et Grafana
│   ├── grafana/      # Configuration Grafana
│   └── prometheus/   # Configuration Prometheus
├── docker/           # Configuration Nginx pour Docker
├── .github/          # Workflow GitHub Actions
└── README.md
```

## CI/CD

- À chaque push sur `main`, [GitHub Actions](.github/workflows/ci.yml) provisionne et déploie automatiquement sur EC2 via Ansible.