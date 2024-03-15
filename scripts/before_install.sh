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

cd /home/ec2-user/app

# install node and npm
sudo yum install curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo yum install nodejs -y
sudo yum install npm -y
# sudo yum install nginx -y

# sudo amazon-linux-extras install epel -y
# sudo yum install --enablerepo="epel" ufw
# ufw --version
# sudo ufw allow 'Nginx HTTP'