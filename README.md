# pi-room

## Step 0
- Enable ssh via `raspi-config`
- Enable i2c via `raspi-config`

Related issue and work around: https://github.com/yarnpkg/berry/issues/6174

## Step 1

On your Local Machine:

Check for existing key pair:  Use the command ls -al ~/.ssh to see if you already have an SSH key pair. This directory stores your SSH keys.

Generate a key pair (if not present): If there are no keys, create a new pair using ssh-keygen -t rsa -b 2048. This generates a public and private key (usually named id_rsa and id_rsa.pub).

Adding the key to Raspberry Pi:

Connect to Raspberry Pi (using password for now): SSH into your Raspberry Pi using the standard command ssh pi@raspberrypi.local (replace with Pi's username and IP if different). Enter the password when prompted.

Copy the Public Key:  Use the ssh-copy-id -p PORT USER@RASPBERRY_IP_ADDRESS command. Replace the placeholders with your Raspberry Pi's details (port, username, and IP address). This copies the public key to the Pi's authorized_keys file.

Testing Passwordless Connection:

Disconnect and Try Again: Exit the SSH session on your local machine. Then try connecting again using ssh pi@raspberrypi.local. If the keys are set up correctly, you should be granted access without entering a password.

### Development

Remote ssh vscode extension

## Step 2

```
ssh pi@ip-addr
pi@raspberrypi:~/Desktop/projects/pi-room $ sudo su
root@raspberrypi:/home/pi/Desktop/projects/pi-room# yarn -v
bash: yarn: command not found
root@raspberrypi:/home/pi/Desktop/projects/pi-room# nvm -v
bash: nvm: command not found
root@raspberrypi:/home/pi/Desktop/projects/pi-room# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 16555  100 16555    0     0  35370      0 --:--:-- --:--:-- --:--:-- 35373
=> Downloading nvm from git to '/root/.nvm'
=> Cloning into '/root/.nvm'...
remote: Enumerating objects: 365, done.
remote: Counting objects: 100% (365/365), done.
remote: Compressing objects: 100% (313/313), done.
remote: Total 365 (delta 43), reused 168 (delta 26), pack-reused 0
Receiving objects: 100% (365/365), 365.08 KiB | 402.00 KiB/s, done.
Resolving deltas: 100% (43/43), done.
* (HEAD detached at FETCH_HEAD)
  master
=> Compressing and cleaning up git repository

=> Appending nvm source string to /root/.bashrc
=> Appending bash_completion source string to /root/.bashrc
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
root@raspberrypi:/home/pi/Desktop/projects/pi-room# nano /root/.bashrc
root@raspberrypi:/home/pi/Desktop/projects/pi-room# export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

root@raspberrypi:/home/pi/Desktop/projects/pi-room# nvm install 18
Downloading and installing node v18.19.1...
Downloading https://nodejs.org/dist/v18.19.1/node-v18.19.1-linux-arm64.tar.xz...
############################################################################################################################################################################### 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v18.19.1 (npm v10.2.4)
Creating default alias: default -> 18 (-> v18.19.1)

root@raspberrypi:/home/pi/Desktop/projects/pi-room# corepack enable

root@raspberrypi:/home/pi/Desktop/projects/pi-room# yarn start
1710868880742 Available Raspi IO  
1710868880751 Connected Raspi IO  
1710868880760 Repl Initialized  
>> blinking

```