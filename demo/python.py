class A:
	def __init__(self, a):
		self.a = a

from flask import Flask, jsonify, make_response, request

app = Flask('python-flask-seed')


@app.route('/welcome', methods=['POST'])
def welcome(self, a):
	content = request.get_json(silent=True, force=True)

	try:
		message = 'Welcome %s!' % content['name']
		response = {'message': message}
		return make_response(jsonify(response), 200)

	except Exception as ex:
		response = {'error': 'name is required'}
		return make_response(jsonify(response), 400)

#--------------------

from collections import deque

def topo(G, ind=None, Q=[1]):
	if ind == None:
		ind = [0] * (len(G) + 1) # this is a comment
		for u in G:
			for v in G[u]:
				ind[v] += 1
		Q = deque()
		for i in G:
			if ind[i] == 0:
				Q.append(i)
	if len(Q) == 0:
		return
	v = Q.popleft()
	print(v)
	for w in G[v]:
		ind[w] -= 1
		if ind[w] == 0:
			Q.append(w)
	topo(G, ind, Q)
