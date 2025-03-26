deps:
	cd backend && docker compose up -d
setup: deps
	bash -c "cd backend && npm i && npm run prisma:migrate"
	bash -c "cd frontend && npm i"
start: deps
	bash -c "cd backend && npm ruun dev" & 
	bash -c "cd frontend && npm start" &