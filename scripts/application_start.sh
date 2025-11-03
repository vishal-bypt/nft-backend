#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/nft-backend/deploy.log
whoami >> /home/ec2-user/nft-backend/deploy.log
echo 'Setting permissions on public folder' >> /home/ec2-user/nft-backend/deploy.log

sudo chmod 0777 -R /home/ec2-user/nft-backend/public/ >> /home/ec2-user/nft-backend/deploy.log 2>&1

echo 'pm2 restart nft-backend' >> /home/ec2-user/nft-backend/deploy.log
pm2 restart all >> /home/ec2-user/nft-backend/deploy.log 2>&1
