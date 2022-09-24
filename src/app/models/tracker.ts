/**
 *
 */
export interface Tracker {
  id: number,
  name: string,
  progress: number,
  createdDate: string,
  completedDate: string,
  genre: string,
}

export const BOOK_TRACKER_DATA: Tracker[] = [
    {
      id: 0, name: "the secrets of the millionare mind", progress: 0, createdDate: "", completedDate: "", genre: "finance"
    },
]

/**
 * https://old.reddit.com/r/learnprogramming/wiki/index
 * https://leetcode.com/
 * https://www.whatsmydns.net/#A/alexholmes.xyz
 * https://www.bugcrowd.com/resources/levelup/introduction-to-bugcrowd-university/
 *
 *
 * // explain how you got the cert to work with nginx and the free cert service I forgot the name of
 * https://stackoverflow.com/questions/51198472/cname-entry-not-working-on-namecheap-using-amazon-certificate-manager
 * https://superuser.com/questions/573268/getting-my-domain-name-to-point-to-my-amazon-ec2-instance
 * https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html
 * https://stackoverflow.com/questions/61502474/adding-aws-public-certificate-with-nginx
 * https://letsencrypt.org/
 * https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/
 * https://stackoverflow.com/questions/53223914/issue-using-certbot-with-nginx
 * https://support.count.ly/hc/en-us/community/posts/360057785292-Installing-Let-s-Encrypt-fails
 *
 * // linux
 * https://www.cyberciti.biz/faq/unix-linux-check-if-port-is-in-use-command/
 *
 * // finance
 * https://old.reddit.com/r/Fire/comments/ekgo42/fire_is_cool_im_insert_here_how_do_i_do_it/
 *
 * // books
 * https://libgen.rs/
 * https://www.humblebundle.com/home/purchases?hmb_source=navbar
 * https://www.waterstones.com/category/computing-internet
 * https://www.waterstones.com/book/coders/clive-thompson/9781529019001
 * https://www.waterstones.com/book/30-second-coding/mark-steadman/9780711263642
 * https://www.waterstones.com/book/the-people-vs-tech/jamie-bartlett/9781785039065
 *
 * // schools
 * https://www.freemens.org/page/?title=Exam+Results&pid=2979
 *
 * // AWS
 * https://aws.amazon.com/certification/certified-cloud-practitioner/?ch=sec&sec=rmg&d=1
 */