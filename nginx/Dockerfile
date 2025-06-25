FROM nginx:alpine

# Copie des configurations
COPY nginx.conf /etc/nginx/nginx.conf
COPY ssl/ /etc/nginx/ssl/
COPY conf.d/ /etc/nginx/conf.d/

# Créez la structure de dossiers nécessaire
RUN mkdir -p /etc/letsencrypt/live/jordane-brosset.com && \
    mkdir -p /etc/letsencrypt/archive/jordane-brosset.com

# Copiez les fichiers de certificats (remplacez par vos vrais fichiers)
COPY certs/live/jordane-brosset.com/ /etc/letsencrypt/live/jordane-brosset.com/
COPY certs/archive/jordane-brosset.com/ /etc/letsencrypt/archive/jordane-brosset.com/