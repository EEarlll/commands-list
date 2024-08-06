
## **Table of Contents**

- [Basic Linux](#basic-linux)
- [Basic Vim](#basic-vim)
- [Ngnix](#ngnix)
- [Pm2](#pm2)
- [Git](#git)

# Basic Linux
| Command                        | Description                                     |
| ------------------------------ | ----------------------------------------------- |
| `ls`                           | show directory                                  |
| `ls -la`                       | show directory with permissions                 |
| `ls -a`                        | show directory with hidden files                |
| `pwd`                          | print working directory                         |
| `mkdir <file path>`            | create directory                                |
| `mkdir -p ./temp/foo/bar.txt`  | create nested directory                         |
| `rm -rf <dir>`                 | delete directory recursively                    |
| `cd`                           | set current directory                           |
| `cd ..`                        | move up current directory                       |
| `cd ~`                         | navigate to home directory                      |
| `ctrl + c`                     | exit program                                    |
| `touch <text.txt>`             | create file                                     |
| `less <file.txt>`              | print in one line at a time                     |
| `cat <file.txt>`               | see contents of file                            |
| `man <command>`                | manual page (q to exit)                         |
| `clear`                        | clear terminal                                  |
| `exit`                         | exit current ssh session                        |
| `echo <text>`                  | print any text                                  |
| `echo $0 / echo $SHELL`        | print current shell                             |
| `echo $USER `                  | print username                                  |
| `openssl <encrpy> <file>`      | encrpy the file with hash                       |
| `ssh-keygen`                   | Generate a ssh key                              |
| `ping <domain.com>`            | check status of network                         |
| `traceroute <domain.com>`      | check all destination of network to domain      |
| `netstat`                      | see all network process                         |
| `nslookup <domain.com>`        | Look at nameserver for domain                   |
| `dig <domain.com>`             | look at dns records for domain                  |
| `apt update`                   | update packages                                 |
| `apt upgrade`                  | upgrade packages                                |
| `shutdown now -r`              | shutdown current time & restart (1 day default) |
| `sudo su`                      | run as root                                     |
| `su earl`                      | run as user                                     |
| `chmod 644 <file>`             | change permision                                |
| `adduser <user>`               | add user                                        |
| `userdel <user>`               | delete user                                     |
| `usermod -aG <pem>`            | add user in permission (ex sudo )               |
| `sudo vi /etc/ssh/sshd_config` | edit config of ssh                              |
| `sudo service ssh restart`     | restart daemon configs                          |
| `less /etc/passwd`             | show all list of users                          |
| `ctrl A + ctrl K `             | wipe current line terminal                      |
| `ctrl L`                       | sshortcut clear                                 |
| `Ctrl Y`                       | recall                                          |


| `sudo chown -R $USER:$USER /var/www`    | change ownership of path                               |
| <code> < cmd return > &#124; grep < pattern ></code> | mode           run command based on return of pipe |
| `eval $(ssh-agent) && ssh-add <private key>`         | add new identity                                   |



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
| `ESC ggVG`     | Select All line                |
| `ESC O`        | New line                       |
| `ESC a`        | end of current line and insert |
| `ESC b`        | start of current line          |



# Ngnix 
| Commands / Filepaths               | Description                   |
| ---------------------------------- | ----------------------------- |
| `sudo service nginx start`         | start nginx server            |
| `sudo service nginx restart`       | restart nginx server          |
| `sudo ngnix -t `                   | test server configs           |
| `/var/www/<site> `                 | file path of project          |
| `/etc/nginx/nginx.conf `           | changed virtual host configs  |
| `/etc/nginx/sites-enabled/<site> ` | config of project server file |


# Pm2
| Commands                     | Description                             |
| ---------------------------- | --------------------------------------- |
| `pm2 start <app.js> --watch` | start app without need of terminal open |
| `pm2 list`                   | show list of current process            |
| `pm2 save`                   | save process / configs                  |
| `pm2 startup`                | show command to start process           |


# Git
| Commands                           | Description         |
| ---------------------------------- | ------------------- |
| `git status `                      | get status of files |
| `git remote add origin <ssh.git >` | create remote       |
| `git pull -u origin <branch>`      | get latest          |
| `git clone <ssh.git>`              | clone repo          |
| `git add .`                        | add all             |
| `git commit `                      | commit files        |
| `git commit -m "<msg>" `           | commit w/ msg files |
| `git push`                         | push repo           |
