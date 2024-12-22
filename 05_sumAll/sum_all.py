def sum_all(num1, num2):
    result = 0
    for i in range(num1, num2 + 1):
        result += i
    return result
print(sum_all(1, 4))
