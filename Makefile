PHONY: start restart stop clean
start:
	docker compose up --build --remove-orphans --watch
restart: stop start
stop:
	docker compose down
clean:
	docker compose down -v
