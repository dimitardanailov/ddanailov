# Secure linux

- fail2ban
- disable root user
- [ntp server](https://www.howtoforge.com/tutorial/ubuntu-ntp-server/)

### Secure shared memory

Shared memory can be used in an attack against a running service, so it is always best to secure that portion of memory. You can do this by modifying the /etc/fstab file.

First, you must open the file for editing by issuing the command:

```bash
sudo nano /etc/fstab
```

Next, add the following line to the bottom of that file:

```bash
tmpfs /run/shm tmpfs defaults,noexec,nosuid 0 0
```

Save and close the file. In order for the changes to take effect, you must reboot the server.

### Harden the networking layer

There is a very simple way to prevent source routing of incoming packets (and log all malformed IPs) on your Ubuntu Server. Open a terminal window, issue the command sudo nano /etc/sysctl.conf, and uncomment or add the following lines:

```bash
# IP Spoofing protection
​net.ipv4.conf.all.rp_filter = 1
​net.ipv4.conf.default.rp_filter = 1
​
​# Ignore ICMP broadcast requests
​net.ipv4.icmp_echo_ignore_broadcasts = 1
​
​# Disable source packet routing
​net.ipv4.conf.all.accept_source_route = 0
​net.ipv6.conf.all.accept_source_route = 0 
​net.ipv4.conf.default.accept_source_route = 0
​net.ipv6.conf.default.accept_source_route = 0
​
​# Ignore send redirects
​net.ipv4.conf.all.send_redirects = 0
​net.ipv4.conf.default.send_redirects = 0
​
​# Block SYN attacks
​net.ipv4.tcp_syncookies = 1
​net.ipv4.tcp_max_syn_backlog = 2048
​net.ipv4.tcp_synack_retries = 2
​net.ipv4.tcp_syn_retries = 5
​
​# Log Martians
​net.ipv4.conf.all.log_martians = 1
​net.ipv4.icmp_ignore_bogus_error_responses = 1
​
​# Ignore ICMP redirects
​net.ipv4.conf.all.accept_redirects = 0
​net.ipv6.conf.all.accept_redirects = 0
​net.ipv4.conf.default.accept_redirects = 0 
​net.ipv6.conf.default.accept_redirects = 0
​
​# Ignore Directed pings
​net.ipv4.icmp_echo_ignore_all = 1
```

Save and close the file, and then restart the service with the command `sudo sysctl -p`

### Prevent IP spoofing

This one is quite simple and will go a long way to prevent your server's IP from being spoofed. Open a terminal window and issue the command sudo nano /etc/host.conf. With this file open for editing, it will look like:

```bash
# The "order" line is only used by old versions of the C library.
​order hosts,bind
​multi on
```

Change the content of this file to:

```bash
# The "order" line is only used by old versions of the C library.
​order bind,hosts
​nospoof on
```

Save and close that file. Viola! No more IP spoofing.

### Firewall with UFW

UFW, or Uncomplicated Firewall, is an interface to iptables that is geared towards simplifying the process of configuring a firewall. While iptables is a solid and flexible tool, it can be difficult for beginners to learn how to use it to properly configure a firewall. If you're looking to get started securing your network, and you're not sure which tool to use, UFW may be the right choice for you.

If you're just getting started with your firewall, the first rules to define are your default policies. These rules control how to handle traffic that does not explicitly match any other rules. By default, UFW is set to deny all incoming connections and allow all outgoing connections. This means anyone trying to reach your server would not be able to connect, while any application within the server would be able to reach the outside world.

Let's set your UFW rules back to the defaults so we can be sure that you'll be able to follow along with this tutorial. To set the defaults used by UFW, use these commands:

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

To enable UFW, use this command:

```bash
sudo ufw enable
```

