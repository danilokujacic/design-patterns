
abstract class RemoteControllerFactory {

    abstract createRemoteController(): RemoteController
}

interface RemoteController {
    switch: () => void;
}

class HuaweiRemoteController implements RemoteControllerFactory {
    createRemoteController(): RemoteController {
        return {
            switch() {}
        }
    }
}

class SamsungRemoteController implements RemoteControllerFactory {
    createRemoteController(): RemoteController {
        return {
            switch() {}
        }
    }
}

const instantiateControllers = () => {

    const samsung: RemoteControllerFactory = new SamsungRemoteController();
    const samsungController = samsung.createRemoteController();
    samsungController.switch();
    const hauwei: RemoteControllerFactory = new HuaweiRemoteController();
    const huaweiController = hauwei.createRemoteController();
    huaweiController.switch();
}

// Ovo koristimo kada ne znamo kakav tip objekta ocekujemo. Onda imamo factory metodu koja ce vratiti sve klase istog interfejsa
// pa je kasnije lakse zamijeniti kod ako nesto treba