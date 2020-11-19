package com.museum.museumcrudapi.services;

public class StorageFileNotFoundException extends com.museum.museumcrudapi.services.StorageException {

    public StorageFileNotFoundException(String message) {
        super(message);
    }

    public StorageFileNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
