#!/bin/bash
cd /home/ec2-user/nft-backend
pm2 kill
pm2 flush
pm2 start pm2 start ecosystem.config.json --name nft-backend


