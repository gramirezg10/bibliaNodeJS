const { createContainer, asClass, asValue, asFunction } = require('awilix');

// config
const config = require('../config');
const app = require('.')

// services
const { HomeService, UserService, CommentService, IdeaService } = require('../services');

// controllers
const { HomeController, UserController, IdeaController, CommentController } = require('../controllers');

// routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

// models
const { UserModel, IdeaModel, CommentModel } = require('../models')

// repository
const { UserRepository, CommentRepository, IdeaRepository } = require('../repository');

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        CommentService: asClass(CommentService).singleton(),
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    })
    .register({
        UserModel: asValue(UserModel),
        IdeaModel: asValue(IdeaModel),
        CommentModel: asValue(CommentModel)
    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton()
    })

module.exports = container;