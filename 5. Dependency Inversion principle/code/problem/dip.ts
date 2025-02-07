class UserController {

    constructor(private userService: UserService) {}

    save() {
        this.userService.save();
    }
}

class UserService {

    constructor(private userRepository: UserRepository) {}

    save() {
        this.userRepository.save();
    }
}

class UserRepository {
    save() {
        console.log("Save user in the database");
    }
}

const userRepository = new UserRepository();

const userService = new UserService(userRepository);

const userController = new UserController(userService);

userController.save();