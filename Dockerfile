# Imagem oficial do PHP com Apache
FROM php:8.2-apache

# Instala dependências e extensões básicas
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    git \
    && docker-php-ext-install \
    pdo \
    pdo_mysql \
    zip \
    opcache \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

# Define o diretório de trabalho (DocumentRoot padrão do Apache)
WORKDIR /var/www/html

# Copia os arquivos do projeto para dentro da imagem
COPY . /var/www/html

# Ajusta permissões
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Expõe a porta do Apache
EXPOSE 81

# Mantém o Apache rodando
CMD ["apache2-foreground"]

