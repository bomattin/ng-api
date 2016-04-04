vagrant init ubuntu/trusty64;
vagrant up;
vagrant ssh -- -t 'curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -;
                   sudo apt-get install -y nodejs git postgresql;
                   sudo su - postgres;
                   createdb nextgear;
                   cd /;
                   git clone https://github.com/bomattin/ng-api;
                   git clone https://github.com/bomattin/ng-client;
                   mv -r ng-client ng-api/public;
                   cd ng-api;

                   node bin/www;
                   /bin/bash;';


