// By default when we don't sent a value its any
let ms;
message = 'abc';
let endsWithC = (<string>ms).endsWith('c');
let alternativeWay = (ms as string).endsWith('c');
