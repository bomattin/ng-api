vagrant init ubuntu/trusty64;
vagrant ssh;
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -;
sudo apt-get install -y nodejs;
git clone https://github.com/bomattin/ng-api
git clone https://github.com/bomattin/ng-client
mv -r ng-client ng-api/public;
cd ng-api;
node bin/www;

