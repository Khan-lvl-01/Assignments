function storeCarInfo(manufacturer: string, modelName: string, ...kwargs: any[]): object {
    const carInfo: any = {
      manufacturer: manufacturer,
      modelName: modelName
    };
  
    for (let i = 0; i < kwargs.length; i += 2) {
      const key = kwargs[i];
      const value = kwargs[i + 1];
      carInfo[key] = value;
    }
  
    return carInfo;
  }
  
   const car = storeCarInfo("Tesla", "Model S", "color", "red", "year", 2022, "optionalFeature", "autopilot");
  
   console.log(car);