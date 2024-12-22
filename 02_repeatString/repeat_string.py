def repeat_string(str, num):
    result = ''
    for i in range(num):
        result += str
    return result
print(repeat_string('hello', 3))