FROM nginx:alpine

# Copie de la configuration principale
COPY nginx.conf /etc/nginx/nginx.conf

# Copie des fichiers SSL
COPY ssl/ /etc/nginx/ssl/

# Copie des configurations de site
COPY conf.d/ /etc/nginx/conf.d/
