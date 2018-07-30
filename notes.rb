# arr = "hello".split("")
# i = 0
# rev_num = -arr.length - 1
# rev = []
# while i < arr.length do
#   rev << arr[(i * -1) - 1]
#   i += 1
# end
# rev.join("")
#

# arr = [1,2,3,4]
#
# def rec (arr)
#   return 0 if arr.empty?
#   arr[0] + rec(arr.drop(1))
# end

# num = 58
#
# def dig (num)
#   while num >= 10 do
#     sum(num)
#   end
# end
#
# def sum (num)
#   root = 0
#   while num > 0
#     root += (num % 10)
#     num /= 10
#   end
#   root
# end

string = "abbccc"

def comp(string)
  h = Hash.new(0)
  current = ""
  string.split("").each do |el|
    if current == el
      h[el] += 1
    else
      h[el] = 1
    end
    current = el
  end
  arr = []
  h.keys.each do |key|
    thing = ""
    if h[key] == 1
       thing = ["#{key}"]
     else
       thing = ["#{key}#{h[key]}"]
     end
    arr << thing
  end
  return arr.join("")
end
