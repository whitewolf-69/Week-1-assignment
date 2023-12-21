function sort(str)
{
  var array= str.split('');
  array= array.sort();
  var sorted= array.join('');
  return sorted;
    
}

function isAnagram(str1,str2){
  if(sort(str1)==sort(str2))
    return true;
  else 
    return false; 
}
console.log(isAnagram("abcd", "dcab"));
