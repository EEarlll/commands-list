
## **Table of Contents**

- [Basic Linux](#basic-linux)
- [Basic Vim](#basic-vim)
- [ngnix](#ngnix)
- [pm2](#pm2)
- [ufw](#ufw)
- [unattended-upgrades](#unattended-upgrades)
- [Basic Logging](#basic-logging)
- [docker](#docker)
- [Git](#git)

### useful links
1. [Crontab Made Easy](https://crontab.guru/)
2. [Markdown Made Easy](https://medium.com/@dipan.saha/markdown-made-easy-unlocking-the-secrets-in-under-5-minutes-519bbc7b8023)
3. [Certbot Https](https://certbot.eff.org/instructions)

# Basic Linux
| Command                                                | Description                                        |
| ------------------------------------------------------ | -------------------------------------------------- |
| `ls`                                                   | show directory                                     |
| `ls -la`                                               | show directory with permissions                    |
| `ls -a`                                                | show directory with hidden files                   |
| `pwd`                                                  | print working directory                            |
| `mkdir <file path>`                                    | create directory                                   |
| `mkdir -p ./temp/foo/bar.txt`                          | create nested directory                            |
| `rm -rf <dir>`                                         | delete directory recursively                       |
| `cd`                                                   | set current directory                              |
| `cd ..`                                                | move up current directory                          |
| `cd ~`                                                 | navigate to home directory                         |
| `ctrl + c`                                             | exit program                                       |
| `touch <text.txt>`                                     | create file                                        |
| `less <file.txt>`                                      | print in one line at a time                        |
| `cat <file.txt>`                                       | see contents of file                               |
| `man <command>`                                        | manual page (q to exit)                            |
| `clear`                                                | clear terminal                                     |
| `exit`                                                 | exit current ssh session                           |
| `echo <text>`                                          | print any text                                     |
| `echo $0 / echo $SHELL`                                | print current shell                                |
| `echo $USER `                                          | print username                                     |
| `openssl <encrpy> <file>`                              | encrpy the file with hash                          |
| `ssh-keygen`                                           | Generate a ssh key                                 |
| `ping <domain.com>`                                    | check status of network                            |
| `traceroute <domain.com>`                              | check all destination of network to domain         |
| `netstat`                                              | see all network process                            |
| `nmap <ip>`                                            | see all open ports                                 |
| `nslookup <domain.com>`                                | Look at nameserver for domain                      |
| `dig <domain.com>`                                     | look at dns records for domain                     |
| `apt update`                                           | update packages                                    |
| `apt upgrade`                                          | upgrade packages                                   |
| `shutdown now -r`                                      | shutdown current time & restart (1 day default)    |
| `sudo su`                                              | run as root                                        |
| `su earl`                                              | run as user                                        |
| `chmod 644 <file/dir>`                                 | chng perm(4,2,1) (owner,group,everyone) (r,w,e)    |
| `adduser <user>`                                       | add user                                           |
| `userdel <user>`                                       | delete user                                        |
| `usermod -aG <pem>`                                    | add user in permission (ex sudo )                  |
| `sudo vi /etc/ssh/sshd_config`                         | edit config of ssh                                 |
| `sudo service ssh restart`                             | restart daemon configs                             |
| `less /etc/passwd`                                     | show all list of users                             |
| `ctrl A + ctrl K `                                     | wipe current line terminal                         |
| `ctrl L`                                               | sshortcut clear                                    |
| `Ctrl Y`                                               | recall                                             |
| `sudo !!`                                              | sudo last command                                  |
| `pkill node / killall node`                            | Kill all node process if stuck                     |
| `htop`                                                 | view all running process in os                     |
| `sudo chown -R $USER:$USER /var/www`                   | change ownership of path                           |
| <code> < cmd return > &#124; grep < pattern ></code>   | mode           run command based on return of pipe |
| `eval $(ssh-agent) && ssh-add <private key>`           | add new identity                                   |
| `curl -m 2 <endpoint>/?q=<param>`                      | http get request -m(timeout)                       |
| `curl --data "param1=value1&param2=value2" <endpoint>` | http post request                                  |
| `sudo lsof -i :<Port>`                                 | view open port at                                  |
| `kill -9 <PID>`                                        | kill port at PID                                   |




# Basic Vim
| Commands       | Description                    |
| -------------- | ------------------------------ |
| `i`            | enter insert mode              |
| `ESC`          | Enter normal mode              |
| `: <cmd>`      | Command Mode                   |
| `ESC :wq`      | Save and Exit                  |
| `ESC :q!`      | quit w/o saving                |
| `ESC u`        | undo                           |
| `ESC ctrl + r` | redo                           |
| `ESC x`        | remove                         |
| `ESC v`        | visual mode                    |
| `ESC dd`       | Delete line                    |
| `ESC V`        | Select line                    |
| `ESC vap`      | Select all line in paragraph   |
| `ESC gg`       | Start line                     |
| `ESC G`        | Last line                      |
| `ESC O`        | New line                       |
| `ESC a`        | end of current line and insert |
| `ESC b`        | start of current line          |

copy paste script
1. Create .vimbuffer
2. paste in .vimrc
3. " copy (write) highlighted text to .vimbuffer
vmap <C-c> y:new ~/.vimbuffer<CR>VGp:x<CR> \| :!cat ~/.vimbuffer \| clip.exe <CR><CR>
" paste from buffer
map <C-v> :r ~/.vimbuffer<CR>


# ngnix 
| Commands / Filepaths               | Description                       |
| ---------------------------------- | --------------------------------- |
| `sudo service nginx start`         | start nginx server                |
| `sudo service nginx restart`       | restart nginx server              |
| `sudo ngnix -t `                   | test server configs               |
| `/var/www/<site> `                 | file path of project              |
| `/etc/nginx/nginx.conf `           | changed virtual host configs/gzip |
| `/etc/nginx/sites-enabled/<site> ` | config of project server file     |

nginx setups 
1. in `/etc/nginx/sites-enabled/<site>` create file and put it in nginx.conf
2. server {
        listen 80 default_server;
        listen [::]:80 default_server;

        server_name earleustacio.me; // domain name
        access_log /var/log/nginx/access.log upstreamlog // log balancer script 

        location / {
                proxy_set_header Upgrade $http_upgrade; // websocket
                proxy_set_header Connection "upgrade"; // websocket
                proxy_pass http://127.0.0.1:3000;   // localhost or loadbalancer
        }
}
Load Balancer script log on nginxconf
`log_format upstreamlog '[$time_local] $remote_addr - $remote_user - $server_name $host to: $upstream_addr: $request $status upstream_response_time $upstream_response_time msec $msec request_time $request_time';
  `



# pm2
| Commands                         | Description                             |
| -------------------------------- | --------------------------------------- |
| `pm2 start <app.js> --watch`     | start app without need of terminal open |
| `pm2 stop <app.js> --watch`      | stop app on pm2                         |
| `pm2 list`                       | show list of current process            |
| `pm2 save`                       | save process / configs                  |
| `pm2 startup`                    | show command to start process           |
| `pm2 logs / pm2 logs [app-name]` | output log of pm2                       |


# ufw
| Commands                            | Description           |
| ----------------------------------- | --------------------- |
| `sudo ufw status`                   | check if ufw is on    |
| `sudo ufw allow/deny/reject <port>` | set up rules          |
| `sudo ufw enable`                   | enable firewall (ufw) |
| `sudo ufw list`                     | show list of commands |

# unattended-upgrades
| Commands                                                   | Description    |
| ---------------------------------------------------------- | -------------- |
| `sudo dpgkg-reconfigure --priority=low unattended upgrade` | enable upgrade |

# Basic Logging
| Commands                                                        | Description                       |
| --------------------------------------------------------------- | --------------------------------- |
| `**** sh /var/www/app/<file>.sh 2>&1 pipe logger -t <file.sh> ` | log crontab                       |
| `/var/log/<syslog>,<auth.log>,</nginx/accesslog>`               | log file path                     |
| `pm2 logs / pm2 logs [app-name]`                                | output log of pm2                 |
| `cat /etc/os-release`                                           | output ver of os                  |
| `tail -f`                                                       | outpat last part w/ follow        |
| `head`                                                          | output first part                 |
| `less`                                                          | output one page at a time         |
| `cat`                                                           | output entire file                |
| <code> &#124; <code>                                            | read from stout                   |
| `>`                                                             | write stdout to file              |
| `>>`                                                            | append stdout to file             |
| `<`                                                             | read from stdin                   |
| `2>&1`                                                          | redirect both stdin/out           |
| `find <dir> -type <f/d> -name <(*.ext, file/>`                  | search file name                  |
| `grep -<i/> '<search exp>' <dir>`                               | search file contents              |
| `zgrep <file> `                                                 | search file without uncompressing |


# docker
| Commands                                                                        | Description                             |
| ------------------------------------------------------------------------------- | --------------------------------------- |
| `FROM <os>`                                                                     | what type of os running                 |
| `RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app` | create a dir for node & change perms    |
| `WORKDIR /home/node/app`                                                        | change work dir                         |
| `COPY --chown=node:node package*.json ./`                                       | copy package json in the directory      |
| `USER node`                                                                     | set user to node                        |
| `RUN npm i`                                                                     | run npm i from the earlier copy package |
| `COPY --chown=node:node . .`                                                    | copy everything from the directory      |
| `EXPOSE 3000`                                                                   | expose port                             |
| `CMD ["node", <app.js>]`                                                        | run command                             |
| `sudo docker build -t <name> .`                                                 | build docker image  from cur dir        |
| `sudo docker run -d -p <out port>:<in port> <imagename>`                        | run docker -d(background) -p(port)      |
| `sudo docker ps`                                                                | view all running docker                 |
| `sudo docker image ls `                                                         | view  dir of docker image               |



# Git
| Commands                             | Description                                  |
| ------------------------------------ | -------------------------------------------- |
| `git status `                        | get status of files                          |
| `git remote add origin <ssh.git >`   | create remote                                |
| `git pull -u origin <branch>`        | get latest                                   |
| `git pull origin <branch> --ff-only` | pull changes that are diff not collide exist |
| `git clone <ssh.git> .`              | clone repo w/o folder                        |
| `git add .`                          | add all                                      |
| `git commit `                        | commit files                                 |
| `git commit -am "<msg>"`             | commit & add files w/ msg                    |
| `git push`                           | push repo                                    |
| `git clear`                          | delete untracked files                       |
| `gh repo create <name>`              | create repo                                  |
| `gh repo rename <name>`              | rename repo                                  |


Node
npm link
"bin": { "<cli>" : "./index.js"}
#!/usr/bin/env node

Iphone 7 IOS 15.8.3 using palera1n linux & baroque ramdisk
1. download baroque ramdisk windows 11
2. sudo palera1n -c -f 
3. follow instruction
4. sudo plaera1n -f 
5. install sileo and update packages
6. download newterm (might need to add new repo to work) 
7. sudo passwd root
8. ssh mobile@<wifiAddress>
9. mount -o rw,union,update /
10. rm -rf /Applications/Setup.app
11. uicache -a
12. killall backboardd

