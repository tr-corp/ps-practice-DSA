// const firstRepeatingElement = (A) => {
//   const idx = new Array(1e6 + 2).fill(-1);
//   let minIdx = +999999999999;
//   let flag = false;
//   A.forEach((el, i) => {
//     if (idx[el] !== -1) {
//       minIdx = Math.min(idx[el], minIdx);
//       flag = true;
//     } else {
//       idx[el] = i;
//       console.log(idx[el])
//     }
//   });
//   if (flag) {
//     return A[minIdx];
//   }
//   return -1;
// };
// const firstEl = (arr)=>{
//     const idx = {};
//     let flag = false;
//     arr.forEach((el,i)=>{
//         idx[el]=-1
//     })
//     let minIdx = arr.length-1;
//     let sol;
//     arr.forEach((el,i)=>{
//         if(idx[el]!=-1){
//             minIdx = Math.min(idx[el],minIdx)

//             flag=true;
//         }else{
//             idx[el] = i;
//         }
//     })
//     if(flag){
//        return arr[minIdx]
//     }
//     return -1
// }
// const arr = [
//   704, 1468, 1530, 294, 209, 1858, 1218, 100012076, 697, 100031282, 1058, 188,
//   1512, 100016052, 222, 399, 100031899, 983, 774, 112, 1459, 1590, 1328, 1193,
//   365, 1368, 1017, 1708, 345, 789, 386, 1756, 1205, 600, 1180, 1906, 100025515,
//   100028855, 745, 1300, 1594, 1450, 100026297, 765, 814, 2, 1077, 125, 1431,
//   100014661, 610, 1914, 1857, 286, 725, 61, 1620, 114, 1366, 1185, 864, 1227,
//   179, 671, 691, 1778, 1924, 100012508, 188, 319, 1680, 100025045, 1545, 1130,
//   452, 15, 1301, 1496, 305, 1283, 834, 646, 838, 1265, 652, 100019413, 446,
//   100015818, 1796, 1046, 1302, 1627, 100020368, 954, 1407, 302, 1357, 1919, 718,
//   889, 1048, 735, 432, 1313, 198, 247, 271, 1389, 1793, 1606, 100022397, 340,
//   387, 265, 192, 215, 865, 1041, 1085, 597, 1950, 67, 1166, 1772, 469, 747,
//   100021628, 601, 1494, 1754, 100027730, 48, 790, 1491, 1350, 1837, 684, 1268,
//   1275, 884, 100018981, 1622, 1414, 194, 100023917, 647, 100011075, 656, 145,
//   477, 1362, 1057, 490, 630, 1453, 856, 100000025, 150, 1410, 100007104, 1246,
//   1201, 275, 1816, 1049, 1617, 1373, 653, 100017117, 1190, 644, 302, 1220,
//   100006700, 1887, 1202, 971, 787, 1611, 461, 1332, 972, 100008885, 76, 465,
//   1726, 1526, 100008381, 100024009, 100003765, 100019463, 1983, 66, 1985, 258,
//   1398, 87, 298, 1379, 53, 1493, 267, 1775, 100027733, 213, 1044, 1099, 632,
//   1703, 605, 455, 100023657, 100017777, 100003954, 858, 6, 100003547, 100007926,
//   1791, 441, 1343, 1981, 828, 100017553, 1123, 535, 359, 1204, 1978, 1484, 598,
//   807, 153, 1683, 517, 1165, 818, 100014368, 412, 1289, 100003967, 100028856,
//   1887, 897, 100032212, 60, 100019175, 356, 1975, 1974, 1564, 1907, 985, 509,
//   100018886, 1882, 820, 550, 39, 931, 190, 1321, 100030633, 875, 213, 213, 272,
//   505, 91, 100022607, 403, 16, 107, 306, 432, 870, 100018434, 507, 100022165,
//   1459, 1932, 222, 125, 1437, 367, 1715, 1247, 100002515, 701, 100006204, 1781,
//   400, 100029408, 1312, 1713, 202, 1599, 1077, 130, 582, 105, 1814, 100018345,
//   1338, 91, 164, 141, 1761, 97, 100029509, 1, 101, 100020416, 582, 1153, 343,
//   1699, 195, 165, 236, 1822, 1324, 1153, 398, 1949, 1831, 100, 216, 1473,
//   100014955, 100028698, 1206, 1015, 592, 100010765, 100017267, 221, 592, 1196,
//   682, 54, 435, 900, 728, 223, 100001080, 398, 1332, 719, 527, 100010223, 1206,
//   1066, 1745, 199, 1206, 403, 920, 600, 1104, 100007572, 1983, 100029590, 1333,
//   100009145, 1155, 142, 1227, 1757, 318, 1841, 900, 936, 1832, 666, 528,
//   100031173, 902, 1313, 1104, 651, 1124, 1937, 189, 1138, 100030388, 1463, 1260,
//   796, 100028393, 1866, 957, 100020575, 389, 632, 296, 100029909, 1331, 174,
//   763, 1662, 647, 884, 100021433, 1021, 100013338, 666, 490, 1741, 1322,
//   100032621, 668, 100015812, 1403, 483, 320, 1042, 200, 675, 217, 438,
//   100002943, 96, 100012937, 100030101, 100013440, 539, 404, 1911, 897, 371,
//   1443, 1488, 1006, 1272, 100030856, 107, 1035, 542, 609, 1394, 1005, 1412,
//   100024729, 1228, 462, 453, 76, 258, 753, 1539, 100026899, 1572, 1398, 1657,
//   1877, 497, 583, 841, 1448, 1228, 1777, 212, 36, 551, 784, 557, 1946, 1617,
//   250, 197, 100025651, 253, 280, 449, 239, 706, 761, 1624, 307, 100021271,
//   100030476, 300, 1682, 1790, 100007950, 1371, 682, 725, 9, 46, 1810, 1338,
//   1548, 1557, 1025, 566, 1769, 480, 1250, 544, 639, 1972, 930, 1708, 202, 1216,
//   1751, 1894, 1073, 100006972, 151, 1420, 965, 100000004, 1853, 1943, 579, 408,
//   24, 100009385, 969, 1172, 1147, 640, 652, 531, 374, 1480, 300, 119, 509, 262,
//   100026032, 100013855, 1042, 1948, 1763, 100020356, 1533, 1032,
// ];
// // console.log("ARRAY LENGTH "+arr.length)
// const arr2 = [ 704, 1468, 1530, 294, 209, 1858, 1218,704]
// const arrTest = [1,5,1,2,3,4]
// // console.log(firstRepeatingElement(arr));
// console.log(firstEl(arr))
// // console.log(ans)


// const sumOfUnique = (arr)=>{
    
// }
// const nums = [1,2,3,2]
// arr.sort()
// console.log(arr)
// let sum = 0;
// // arr.forEach((el,i)=>{
// //     if(el!==arr[i+1]){
// //         console.log(el)
// //         sum+=el;
// //     }
// // })
// for(let i=0;i<nums.length;i++){
//     if(nums[i]===nums[i+1] || nums[i]===nums[i-1]){
//         continue;
//     }
//     sum+=nums[i]
// }
// console.log(sum)
// arr.forEach((el)=>{
//     idx[el]=0;
// })
// let sum=0;
// console.log(typeof(sum))
// arr.forEach((el)=>{
//     idx[el]++;
//     if(idx[el]===1){
//         sum += parseInt(el)
//     }
//     if(idx[el]>1){
//         sum-=parseInt(el)
//     }
    
// })
// Object.keys(idx).forEach((el)=>{
//     if(idx[el]===1){
//         sum = sum+parseInt(el);
//     }
// })
// console.table(sum)
function sumOfUnique(arr){
    return [...new Set(arr)].reduce((a,b)=>a+b)
}
const nums = [1,2,1,4,2,3]
console.log(sumOfUnique(nums))