#!/bin/bash

# navigate to app folder
cd /app

# # install dependencies
npm install
npm run build
cp -r build/* /var/www/html










# Kill any servers that may be running in the background
# sudo pkill -f runserver

# # Change directory to the Django project root
# cd /home/ec2-demo/Django-demo/

# # Install the AWS CLI
# curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
# unzip awscliv2.zip
# sudo ./aws/install


# Verify AWS CLI installation and configure if needed
# aws --version
# aws configure  # Uncomment this line if you need to configure AWS CLI
# sudo docker-compose up

npm install pm2 -g