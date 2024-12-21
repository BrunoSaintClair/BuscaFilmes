class RecentHistory:
    def __init__(self, capacity=3):
        self.history = []
        self.capacity = capacity

    def _add(self, item):
        if len(self.history) == self.capacity:
            self.history.pop(0)
        self.history.append(item)

    def _show(self):
        dic = {}
        for i in range(len(self.history)):
            dic[i + 1] = self.history[i]

        return dic
