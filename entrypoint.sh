#!/bin/sh

# Write runtime envs into a JS file the frontend can read
cat <<EOF > /usr/share/nginx/html/env.js
window.REACT_APP_API_URL="${REACT_APP_API_URL}";
EOF

# Start nginx
exec nginx -g 'daemon off;'
