/**
 * This is a generic interface that makes the structure
 * of the collectable objects.
 */
interface collectable<T> {
  addItem(item: T): void;
  getItem(position: number): T;
  removeItem(): void;
  getNumberOfItems(): number;
}

/**
 * This is a generic interface that makes the structure
 * of the printable object.
 */
interface printable<T> {
  print(): T[];
}

/**
 * This is the class that implements the basic
 * structure of the objects.
 */
abstract class printableCollection<T> implements collectable<T>, printable<T> {
  /**
   * This is the constructor of the abstract class.
   * @param itemArray Consists in the array of items.
   */
  constructor(private itemArray: T[]) {
  }
  /**
   * This function adds items to the array.
   * @param item Consists in the item to add.
   */
  addItem(item: T): void {
    this.itemArray.push(item);
  }
  /**
   * This function gets the item of the array.
   * @param position Consists in the position of the array to get.
   * @returns The item of the array.
   */
  getItem(position: number): T {
    return this.itemArray[position];
  }
  /**
   * This function removes items from the array of them.
   */
  removeItem(): void {
    this.itemArray.pop();
  }
  /**
   * This function gets the total number of items
   * that has the array.
   * @returns The number of items.
   */
  getNumberOfItems(): number {
    return this.itemArray.length;
  }
  /**
   * This is the abstract function of print.
   */
  abstract print(): T[];
}

/**
 * This function makes a collection of numbers.
 */
class NumericPrintableCollection extends printableCollection<number> {
  /**
   * This is the constructor of the class.
   * @param itemArray Consists in an empty array of items.
   */
  constructor(itemArray: number[]) {
    super(itemArray);
  }
  /**
   * This function prints the collection of numbers.
   * @returns The collection of numbers.
   */
  print(): number[] {
    let printArray: number[] = [];
    let i: number = 0;
    for (i = 0; i < this.getNumberOfItems(); i++) {
      printArray.push(this.getItem(i));
    }
    return printArray;
  }
}

/**
 * This class makes a collection of strings.
 */
class StringPrintableCollection extends printableCollection<string> {
  /**
   * This is the constructor of the class.
   * @param itemArray Consists in a empty item array.
   */
  constructor(itemArray: string[]) {
    super(itemArray);
  }
  /**
   * This function prints the collection of strings.
   * @returns The collection of strings.
   */
  print(): string[] {
    let auxiliaryString: string = ``;
    let printArray: string[] = [];
    let i: number = 0;
    for (i = 0; i < this.getNumberOfItems(); i++) {
      auxiliaryString = auxiliaryString + this.getItem(i);
    }
    printArray.push(auxiliaryString);
    return printArray;
  }
}

const example =
  new NumericPrintableCollection([]);

example.addItem(1);
example.addItem(2);
example.addItem(3);
let representation = example.print();
console.log(`La representación es: ${representation}`);

const example1 =
    new StringPrintableCollection([]);

example1.addItem(`Hola`);
example1.addItem(`Caracola`);
let representation1 = example1.print();
console.log(`La representación es: ${representation1}`);


