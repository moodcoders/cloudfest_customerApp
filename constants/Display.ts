import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

/**Used for setting the height of an element 
 * 
 * @param height - height of an element/tag
 * 
 * @returns setHeight 
 * Return the height of an element/tag respective to the size of the screen
 * 
 * */
const setHeight = (h: number) => (height / 100) * h;

/**Used for setting the width of an element 
 * 
 * @param width - width of an element/tag
 * 
 * @returns setWidth 
 * Return the width of an element/tag respective to the size of the screen
 * 
 * */
const setWidth = (w: number) => (width / 100) * w;

export default { setHeight, setWidth };
