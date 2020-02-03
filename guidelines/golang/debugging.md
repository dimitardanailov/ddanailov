```golang

```

# Creates a new golang binary
```bash
go build
```

# build without cache
```bash
go build - a
```

# How Golang builds a binary
```bash
go build -x
```

# Get info about golang binary files
```bash
go build -work -a
```

# Tools


# https://golang.org/pkg/cmd/go/internal/list/
```bash
go list
```

```bash
go list -f {{.GoFiles}}
```

```bash
GOOS=windows go list -f {{.GoFiles}}
```

```bash
go build -gcflags="-S"
``` 

```bash
go tool objdump
```

```bash
go tool nm codegen | grep main.main

go build -gcflags="-N -l"

GOSSAFUNC=main go build

go build -gcflags="-m"

go build -gcflags="-live"
```