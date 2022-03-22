import {streamable} from './ejercicio-2-streamable';
/**
 * This is the class neccesary to define the structure
 * of the different streaming objects.
 */
export abstract class basicStreamableCollection implements streamable<any> {
  /**
     * This is the constructor of the abstract class.
     * @param name Consists in the name of the object.
     * @param age Consists in the age of the emission.
     * @param type Consists in the type of the object.
     * @param category Consist in the genere of the object.
     */
  constructor(public name: string, public age: number, public type: string,
      public category: string) {
  }
    /**
     * This function filters the objects in alphabetic order.
     */
    abstract nameFilter(): any;
    /**
     * This function filters the objects in age order.
     */
    abstract ageFilter(): any;
    /**
     * This function filters the objects in category alphabetic
     * order.
     */
    abstract categoryFilter(): any;
}
