echo "setup dir..."
root="/var/www/html/ssot"
cd $root
echo "set up ssh agent..."
eval 'ssh-agent -s'
ssh-add ~/.ssh/ssot
ssh -T git@bitbucket.org
git pull origin master
rm -rf dist
npm install --quiet
npm run build
pm2 restart ssot