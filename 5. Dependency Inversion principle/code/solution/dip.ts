interface Repository {
    save() : void;
}

interface Service {
    save() : void;
}

class UserController {

    constructor(private service: Service) {}

    save() {
        this.service.save();
    }
}

class UserService {

    constructor(private repository: Repository) {}

    save() {
        this.repository.save();
    }
}

class UserPostgressRepository implements Repository {
    save() {
        console.log("Save user in the postgress database");
    }
}

class UserMongoRepository implements Repository {
    save() {
        console.log("Save user in the mongodb database");
    }
}

const userPostgressRepository = new UserPostgressRepository();
const userService = new UserService(userPostgressRepository);

const userMongoRepository = new UserMongoRepository();
const userService2 = new UserService(userMongoRepository);


const userController = new UserController(userService);

userController.save();