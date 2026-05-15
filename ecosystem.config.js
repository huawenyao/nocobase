module.exports = {
  apps: [
    {
      name: 'nocobase',
      script: './node_modules/.bin/nocobase',
      args: 'start',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=2048',
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      output: './storage/logs/pm2/out.log',
      error: './storage/logs/pm2/error.log',
      combine_logs: true,
      merge_logs: true,
      autorestart: true,
      restart_delay: 3000,
      max_restarts: 10,
    },
  ],
};
