.PHONY: start restart stop clean build
start:
	docker compose up --build --remove-orphans --watch
restart: stop start
stop:
	docker compose down
clean:
	docker compose down -v
build:
	docker compose run --build --remove-orphans build
