def manual_isidentifier(s):
    keywords = [
        "False", "None", "True", "and", "as", "assert", "async", "await", 
        "break", "class", "continue", "def", "del", "elif", "else", "except", 
        "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", 
        "nonlocal", "not", "or", "pass", "raise", "return", "try", "while", "with", 
        "yield"
    ]

    functions = [
        "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", 
        "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", 
        "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", 
        "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", 
        "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", 
        "list", "locals", "map", "max", "memoryview", "min", "next", "object", 
        "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", 
        "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", 
        "super", "tuple", "type", "vars", "zip"
    ]

    if s in functions or s in keywords:
        return False
    
    for char in s:
        if  char != '_' and not('a' <= char.lower() <= 'z') and not('0' <= char <= '9'):
            return False
    
    return True

print(manual_isidentifier('int'))