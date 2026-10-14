# AWS deployment outline (bonus)

- **Application:** Deploy the Laravel app on an EC2 instance behind Nginx and PHP-FPM. Keep the instance patched and use a non-root deployment user.
- **Database:** Use Amazon RDS for MySQL in a private subnet. Permit database traffic only from the app's security group; do not expose port 3306 publicly.
- **Files:** If uploads are added later, store them in a private S3 bucket with least-privilege IAM access and short-lived signed URLs where needed.
- **Secrets:** Set `APP_KEY`, database credentials and API tokens through a secrets manager or protected environment configuration. Never commit `.env`.
- **Network:** Allow HTTPS (443) from users, restrict SSH to approved IPs, and redirect HTTP to HTTPS. Configure TLS with a managed certificate.
- **Operations:** Run migrations as a controlled release step, enable logs/monitoring, configure backups, and test restoration. Use `APP_DEBUG=false` in production.
- **Medical context:** This demo is not production-ready for patient data. A real system needs a security, privacy, regulatory and clinical-risk review.
