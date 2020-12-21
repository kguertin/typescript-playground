interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

// Must match interface types and keys
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary);
};

printVehicle(oldCivic);
