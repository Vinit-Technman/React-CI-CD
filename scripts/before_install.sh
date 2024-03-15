#!/bin/bash

# navigate to app folder

# install CodeDeploy agent
sudo rm -rf /home/ec2-user/install

sudo yum -y update
sudo yum -y install ruby
sudo yum -y install wget
cd /home/ec2-user
wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
sudo chmod +x ./install 
sudo ./install auto

# update os & install python3
sudo yum update
# sudo yum install -y python3 python3-dev python3-pip python3-venv
# pip install --user --upgrade virtualenv
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker

sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose


cd /app

# install node and npm
sudo yum install curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo yum install nodejs -y
sudo yum install npm -y
sudo yum install nginx -y
ufw allow 'Nginx HTTP'