def remove_from_array(lst, num):
    for i in lst:
        if i == num:
            lst.remove(num)
    return lst
print(remove_from_array([1,2,3,4], 1))