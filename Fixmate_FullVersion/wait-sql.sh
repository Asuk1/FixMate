    ports:
      - "80:80"
    environment:
      VITE_BACKEND_URL: http://backend:3000
    depends_on:
      - backend
