.PHONY: start restart stop clean build
start:
	docker compose up --build --remove-orphans --watch
restart: stop start
stop:
	docker compose down
clean:
	docker compose down -v
build:
	-rm build.zip
	docker compose run --build --remove-orphans build
	cd build && zip -r ../build.zip .
