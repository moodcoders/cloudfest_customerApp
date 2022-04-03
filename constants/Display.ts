import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const setHeight = (h: any) => (height / 100) * h;
const setWidth = (w: number) => (width / 100) * w;

/**Display Component is used to give the required dimension to an element 
 * 
 * @param height - Height of an element/tag
 * @param width - width of an element/tag
 * 
 * @returns setHeight  and setWidth:- 
 * Return the height and width of an element/tag respective to the size of the screen
 * 
 * */
export default { setHeight, setWidth };
