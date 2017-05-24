(function(){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime = createCommonjsModule(function (module) {
	/**
  * Copyright (c) 2014, Facebook, Inc.
  * All rights reserved.
  *
  * This source code is licensed under the BSD-style license found in the
  * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
  * additional grant of patent rights can be found in the PATENTS file in
  * the same directory.
  */

	!function (global) {
		"use strict";

		var Op = Object.prototype;
		var hasOwn = Op.hasOwnProperty;
		var undefined; // More compressible than void 0.
		var $Symbol = typeof Symbol === "function" ? Symbol : {};
		var iteratorSymbol = $Symbol.iterator || "@@iterator";
		var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
		var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

		var inModule = 'object' === "object";
		var runtime = global.regeneratorRuntime;
		if (runtime) {
			if (inModule) {
				// If regeneratorRuntime is defined globally and we're in a module,
				// make the exports object identical to regeneratorRuntime.
				module.exports = runtime;
			}
			// Don't bother evaluating the rest of this file if the runtime was
			// already defined globally.
			return;
		}

		// Define the runtime globally (as expected by generated code) as either
		// module.exports (if we're in a module) or a new, empty object.
		runtime = global.regeneratorRuntime = inModule ? module.exports : {};

		function wrap(innerFn, outerFn, self, tryLocsList) {
			// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
			var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
			var generator = Object.create(protoGenerator.prototype);
			var context = new Context(tryLocsList || []);

			// The ._invoke method unifies the implementations of the .next,
			// .throw, and .return methods.
			generator._invoke = makeInvokeMethod(innerFn, self, context);

			return generator;
		}
		runtime.wrap = wrap;

		// Try/catch helper to minimize deoptimizations. Returns a completion
		// record like context.tryEntries[i].completion. This interface could
		// have been (and was previously) designed to take a closure to be
		// invoked without arguments, but in all the cases we care about we
		// already have an existing method we want to call, so there's no need
		// to create a new function object. We can even get away with assuming
		// the method takes exactly one argument, since that happens to be true
		// in every case, so we don't have to touch the arguments object. The
		// only additional allocation required is the completion record, which
		// has a stable shape and so hopefully should be cheap to allocate.
		function tryCatch(fn, obj, arg) {
			try {
				return { type: "normal", arg: fn.call(obj, arg) };
			} catch (err) {
				return { type: "throw", arg: err };
			}
		}

		var GenStateSuspendedStart = "suspendedStart";
		var GenStateSuspendedYield = "suspendedYield";
		var GenStateExecuting = "executing";
		var GenStateCompleted = "completed";

		// Returning this object from the innerFn has the same effect as
		// breaking out of the dispatch switch statement.
		var ContinueSentinel = {};

		// Dummy constructor functions that we use as the .constructor and
		// .constructor.prototype properties for functions that return Generator
		// objects. For full spec compliance, you may wish to configure your
		// minifier not to mangle the names of these two functions.
		function Generator() {}
		function GeneratorFunction() {}
		function GeneratorFunctionPrototype() {}

		// This is a polyfill for %IteratorPrototype% for environments that
		// don't natively support it.
		var IteratorPrototype = {};
		IteratorPrototype[iteratorSymbol] = function () {
			return this;
		};

		var getProto = Object.getPrototypeOf;
		var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
		if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
			// This environment has a native %IteratorPrototype%; use it instead
			// of the polyfill.
			IteratorPrototype = NativeIteratorPrototype;
		}

		var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
		GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
		GeneratorFunctionPrototype.constructor = GeneratorFunction;
		GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

		// Helper for defining the .next, .throw, and .return methods of the
		// Iterator interface in terms of a single ._invoke method.
		function defineIteratorMethods(prototype) {
			["next", "throw", "return"].forEach(function (method) {
				prototype[method] = function (arg) {
					return this._invoke(method, arg);
				};
			});
		}

		runtime.isGeneratorFunction = function (genFun) {
			var ctor = typeof genFun === "function" && genFun.constructor;
			return ctor ? ctor === GeneratorFunction ||
			// For the native GeneratorFunction constructor, the best we can
			// do is to check its .name property.
			(ctor.displayName || ctor.name) === "GeneratorFunction" : false;
		};

		runtime.mark = function (genFun) {
			if (Object.setPrototypeOf) {
				Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
			} else {
				genFun.__proto__ = GeneratorFunctionPrototype;
				if (!(toStringTagSymbol in genFun)) {
					genFun[toStringTagSymbol] = "GeneratorFunction";
				}
			}
			genFun.prototype = Object.create(Gp);
			return genFun;
		};

		// Within the body of any async function, `await x` is transformed to
		// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
		// `hasOwn.call(value, "__await")` to determine if the yielded value is
		// meant to be awaited.
		runtime.awrap = function (arg) {
			return { __await: arg };
		};

		function AsyncIterator(generator) {
			function invoke(method, arg, resolve, reject) {
				var record = tryCatch(generator[method], generator, arg);
				if (record.type === "throw") {
					reject(record.arg);
				} else {
					var result = record.arg;
					var value = result.value;
					if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
						return Promise.resolve(value.__await).then(function (value) {
							invoke("next", value, resolve, reject);
						}, function (err) {
							invoke("throw", err, resolve, reject);
						});
					}

					return Promise.resolve(value).then(function (unwrapped) {
						// When a yielded Promise is resolved, its final value becomes
						// the .value of the Promise<{value,done}> result for the
						// current iteration. If the Promise is rejected, however, the
						// result for this iteration will be rejected with the same
						// reason. Note that rejections of yielded Promises are not
						// thrown back into the generator function, as is the case
						// when an awaited Promise is rejected. This difference in
						// behavior between yield and await is important, because it
						// allows the consumer to decide what to do with the yielded
						// rejection (swallow it and continue, manually .throw it back
						// into the generator, abandon iteration, whatever). With
						// await, by contrast, there is no opportunity to examine the
						// rejection reason outside the generator function, so the
						// only option is to throw it from the await expression, and
						// let the generator function handle the exception.
						result.value = unwrapped;
						resolve(result);
					}, reject);
				}
			}

			if (_typeof(global.process) === "object" && global.process.domain) {
				invoke = global.process.domain.bind(invoke);
			}

			var previousPromise;

			function enqueue(method, arg) {
				function callInvokeWithMethodAndArg() {
					return new Promise(function (resolve, reject) {
						invoke(method, arg, resolve, reject);
					});
				}

				return previousPromise =
				// If enqueue has been called before, then we want to wait until
				// all previous Promises have been resolved before calling invoke,
				// so that results are always delivered in the correct order. If
				// enqueue has not been called before, then it is important to
				// call invoke immediately, without waiting on a callback to fire,
				// so that the async generator function has the opportunity to do
				// any necessary setup in a predictable way. This predictability
				// is why the Promise constructor synchronously invokes its
				// executor callback, and why async functions synchronously
				// execute code before the first await. Since we implement simple
				// async functions in terms of async generators, it is especially
				// important to get this right, even though it requires care.
				previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
				// Avoid propagating failures to Promises returned by later
				// invocations of the iterator.
				callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
			}

			// Define the unified helper method that is used to implement .next,
			// .throw, and .return (see defineIteratorMethods).
			this._invoke = enqueue;
		}

		defineIteratorMethods(AsyncIterator.prototype);
		AsyncIterator.prototype[asyncIteratorSymbol] = function () {
			return this;
		};
		runtime.AsyncIterator = AsyncIterator;

		// Note that simple async functions are implemented on top of
		// AsyncIterator objects; they just return a Promise for the value of
		// the final result produced by the iterator.
		runtime.async = function (innerFn, outerFn, self, tryLocsList) {
			var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

			return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
			: iter.next().then(function (result) {
				return result.done ? result.value : iter.next();
			});
		};

		function makeInvokeMethod(innerFn, self, context) {
			var state = GenStateSuspendedStart;

			return function invoke(method, arg) {
				if (state === GenStateExecuting) {
					throw new Error("Generator is already running");
				}

				if (state === GenStateCompleted) {
					if (method === "throw") {
						throw arg;
					}

					// Be forgiving, per 25.3.3.3.3 of the spec:
					// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
					return doneResult();
				}

				context.method = method;
				context.arg = arg;

				while (true) {
					var delegate = context.delegate;
					if (delegate) {
						var delegateResult = maybeInvokeDelegate(delegate, context);
						if (delegateResult) {
							if (delegateResult === ContinueSentinel) continue;
							return delegateResult;
						}
					}

					if (context.method === "next") {
						// Setting context._sent for legacy support of Babel's
						// function.sent implementation.
						context.sent = context._sent = context.arg;
					} else if (context.method === "throw") {
						if (state === GenStateSuspendedStart) {
							state = GenStateCompleted;
							throw context.arg;
						}

						context.dispatchException(context.arg);
					} else if (context.method === "return") {
						context.abrupt("return", context.arg);
					}

					state = GenStateExecuting;

					var record = tryCatch(innerFn, self, context);
					if (record.type === "normal") {
						// If an exception is thrown from innerFn, we leave state ===
						// GenStateExecuting and loop back for another invocation.
						state = context.done ? GenStateCompleted : GenStateSuspendedYield;

						if (record.arg === ContinueSentinel) {
							continue;
						}

						return {
							value: record.arg,
							done: context.done
						};
					} else if (record.type === "throw") {
						state = GenStateCompleted;
						// Dispatch the exception by looping back around to the
						// context.dispatchException(context.arg) call above.
						context.method = "throw";
						context.arg = record.arg;
					}
				}
			};
		}

		// Call delegate.iterator[context.method](context.arg) and handle the
		// result, either by returning a { value, done } result from the
		// delegate iterator, or by modifying context.method and context.arg,
		// setting context.delegate to null, and returning the ContinueSentinel.
		function maybeInvokeDelegate(delegate, context) {
			var method = delegate.iterator[context.method];
			if (method === undefined) {
				// A .throw or .return when the delegate iterator has no .throw
				// method always terminates the yield* loop.
				context.delegate = null;

				if (context.method === "throw") {
					if (delegate.iterator.return) {
						// If the delegate iterator has a return method, give it a
						// chance to clean up.
						context.method = "return";
						context.arg = undefined;
						maybeInvokeDelegate(delegate, context);

						if (context.method === "throw") {
							// If maybeInvokeDelegate(context) changed context.method from
							// "return" to "throw", let that override the TypeError below.
							return ContinueSentinel;
						}
					}

					context.method = "throw";
					context.arg = new TypeError("The iterator does not provide a 'throw' method");
				}

				return ContinueSentinel;
			}

			var record = tryCatch(method, delegate.iterator, context.arg);

			if (record.type === "throw") {
				context.method = "throw";
				context.arg = record.arg;
				context.delegate = null;
				return ContinueSentinel;
			}

			var info = record.arg;

			if (!info) {
				context.method = "throw";
				context.arg = new TypeError("iterator result is not an object");
				context.delegate = null;
				return ContinueSentinel;
			}

			if (info.done) {
				// Assign the result of the finished delegate to the temporary
				// variable specified by delegate.resultName (see delegateYield).
				context[delegate.resultName] = info.value;

				// Resume execution at the desired location (see delegateYield).
				context.next = delegate.nextLoc;

				// If context.method was "throw" but the delegate handled the
				// exception, let the outer generator proceed normally. If
				// context.method was "next", forget context.arg since it has been
				// "consumed" by the delegate iterator. If context.method was
				// "return", allow the original .return call to continue in the
				// outer generator.
				if (context.method !== "return") {
					context.method = "next";
					context.arg = undefined;
				}
			} else {
				// Re-yield the result returned by the delegate method.
				return info;
			}

			// The delegate iterator is finished, so forget it and continue with
			// the outer generator.
			context.delegate = null;
			return ContinueSentinel;
		}

		// Define Generator.prototype.{next,throw,return} in terms of the
		// unified ._invoke helper method.
		defineIteratorMethods(Gp);

		Gp[toStringTagSymbol] = "Generator";

		// A Generator should always return itself as the iterator object when the
		// @@iterator function is called on it. Some browsers' implementations of the
		// iterator prototype chain incorrectly implement this, causing the Generator
		// object to not be returned from this call. This ensures that doesn't happen.
		// See https://github.com/facebook/regenerator/issues/274 for more details.
		Gp[iteratorSymbol] = function () {
			return this;
		};

		Gp.toString = function () {
			return "[object Generator]";
		};

		function pushTryEntry(locs) {
			var entry = { tryLoc: locs[0] };

			if (1 in locs) {
				entry.catchLoc = locs[1];
			}

			if (2 in locs) {
				entry.finallyLoc = locs[2];
				entry.afterLoc = locs[3];
			}

			this.tryEntries.push(entry);
		}

		function resetTryEntry(entry) {
			var record = entry.completion || {};
			record.type = "normal";
			delete record.arg;
			entry.completion = record;
		}

		function Context(tryLocsList) {
			// The root entry object (effectively a try statement without a catch
			// or a finally block) gives us a place to store values thrown from
			// locations where there is no enclosing try statement.
			this.tryEntries = [{ tryLoc: "root" }];
			tryLocsList.forEach(pushTryEntry, this);
			this.reset(true);
		}

		runtime.keys = function (object) {
			var keys = [];
			for (var key in object) {
				keys.push(key);
			}
			keys.reverse();

			// Rather than returning an object with a next method, we keep
			// things simple and return the next function itself.
			return function next() {
				while (keys.length) {
					var key = keys.pop();
					if (key in object) {
						next.value = key;
						next.done = false;
						return next;
					}
				}

				// To avoid creating an additional object, we just hang the .value
				// and .done properties off the next function object itself. This
				// also ensures that the minifier will not anonymize the function.
				next.done = true;
				return next;
			};
		};

		function values(iterable) {
			if (iterable) {
				var iteratorMethod = iterable[iteratorSymbol];
				if (iteratorMethod) {
					return iteratorMethod.call(iterable);
				}

				if (typeof iterable.next === "function") {
					return iterable;
				}

				if (!isNaN(iterable.length)) {
					var i = -1,
					    next = function next() {
						while (++i < iterable.length) {
							if (hasOwn.call(iterable, i)) {
								next.value = iterable[i];
								next.done = false;
								return next;
							}
						}

						next.value = undefined;
						next.done = true;

						return next;
					};

					return next.next = next;
				}
			}

			// Return an iterator with no values.
			return { next: doneResult };
		}
		runtime.values = values;

		function doneResult() {
			return { value: undefined, done: true };
		}

		Context.prototype = {
			constructor: Context,

			reset: function reset(skipTempReset) {
				this.prev = 0;
				this.next = 0;
				// Resetting context._sent for legacy support of Babel's
				// function.sent implementation.
				this.sent = this._sent = undefined;
				this.done = false;
				this.delegate = null;

				this.method = "next";
				this.arg = undefined;

				this.tryEntries.forEach(resetTryEntry);

				if (!skipTempReset) {
					for (var name in this) {
						// Not sure about the optimal order of these conditions:
						if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
							this[name] = undefined;
						}
					}
				}
			},

			stop: function stop() {
				this.done = true;

				var rootEntry = this.tryEntries[0];
				var rootRecord = rootEntry.completion;
				if (rootRecord.type === "throw") {
					throw rootRecord.arg;
				}

				return this.rval;
			},

			dispatchException: function dispatchException(exception) {
				if (this.done) {
					throw exception;
				}

				var context = this;
				function handle(loc, caught) {
					record.type = "throw";
					record.arg = exception;
					context.next = loc;

					if (caught) {
						// If the dispatched exception was caught by a catch block,
						// then let that catch block handle the exception normally.
						context.method = "next";
						context.arg = undefined;
					}

					return !!caught;
				}

				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var entry = this.tryEntries[i];
					var record = entry.completion;

					if (entry.tryLoc === "root") {
						// Exception thrown outside of any try block that could handle
						// it, so set the completion value of the entire function to
						// throw the exception.
						return handle("end");
					}

					if (entry.tryLoc <= this.prev) {
						var hasCatch = hasOwn.call(entry, "catchLoc");
						var hasFinally = hasOwn.call(entry, "finallyLoc");

						if (hasCatch && hasFinally) {
							if (this.prev < entry.catchLoc) {
								return handle(entry.catchLoc, true);
							} else if (this.prev < entry.finallyLoc) {
								return handle(entry.finallyLoc);
							}
						} else if (hasCatch) {
							if (this.prev < entry.catchLoc) {
								return handle(entry.catchLoc, true);
							}
						} else if (hasFinally) {
							if (this.prev < entry.finallyLoc) {
								return handle(entry.finallyLoc);
							}
						} else {
							throw new Error("try statement without catch or finally");
						}
					}
				}
			},

			abrupt: function abrupt(type, arg) {
				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var entry = this.tryEntries[i];
					if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
						var finallyEntry = entry;
						break;
					}
				}

				if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
					// Ignore the finally entry if control is not jumping to a
					// location outside the try/catch block.
					finallyEntry = null;
				}

				var record = finallyEntry ? finallyEntry.completion : {};
				record.type = type;
				record.arg = arg;

				if (finallyEntry) {
					this.method = "next";
					this.next = finallyEntry.finallyLoc;
					return ContinueSentinel;
				}

				return this.complete(record);
			},

			complete: function complete(record, afterLoc) {
				if (record.type === "throw") {
					throw record.arg;
				}

				if (record.type === "break" || record.type === "continue") {
					this.next = record.arg;
				} else if (record.type === "return") {
					this.rval = this.arg = record.arg;
					this.method = "return";
					this.next = "end";
				} else if (record.type === "normal" && afterLoc) {
					this.next = afterLoc;
				}

				return ContinueSentinel;
			},

			finish: function finish(finallyLoc) {
				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var entry = this.tryEntries[i];
					if (entry.finallyLoc === finallyLoc) {
						this.complete(entry.completion, entry.afterLoc);
						resetTryEntry(entry);
						return ContinueSentinel;
					}
				}
			},

			"catch": function _catch(tryLoc) {
				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var entry = this.tryEntries[i];
					if (entry.tryLoc === tryLoc) {
						var record = entry.completion;
						if (record.type === "throw") {
							var thrown = record.arg;
							resetTryEntry(entry);
						}
						return thrown;
					}
				}

				// The context.catch method must only be called with a location
				// argument that corresponds to a known catch block.
				throw new Error("illegal catch attempt");
			},

			delegateYield: function delegateYield(iterable, resultName, nextLoc) {
				this.delegate = {
					iterator: values(iterable),
					resultName: resultName,
					nextLoc: nextLoc
				};

				if (this.method === "next") {
					// Deliberately forget the last sent value so that we don't
					// accidentally pass it on to the delegate.
					this.arg = undefined;
				}

				return ContinueSentinel;
			}
		};
	}(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	(typeof commonjsGlobal === 'undefined' ? 'undefined' : _typeof(commonjsGlobal)) === "object" ? commonjsGlobal : (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object" ? window : (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === "object" ? self : commonjsGlobal);
});

function readBlob$$1(data, type) {
	var reader = new FileReader();
	var promise = new Promise(function (resolve, reject) {
		reader.onload = function () {
			resolve(reader.result);
		};
		reader.onerror = function () {
			reject(reader.error);
		};
		switch (type) {
			case 'ArrayBuffer':
				reader.readAsArrayBuffer(data);
				break;
			case 'BinaryString':
				reader.readAsBinaryString(data);
				break;
			case 'DataURL':
				reader.readAsDataURL(data);
				break;
			default:
				reader.readAsText(data);
				break;
		}
	});
	promise.reader = reader;
	return promise;
}

function trim(string) {
	return string.trim();
}

var iteratorKey = Symbol.iterator;

function isFunction(x) {
	return typeof x === 'function';
}

var MAX_SAFE_INTEGER = 9007199254740991;

function _forEach(iterable, fn, thisArg) {
	var fromIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	var length = iterable.length;

	var iterator = iterable[iteratorKey] ? iterable[iteratorKey]() : iterable;
	if (0 <= length) {
		for (var index = fromIndex; index < length; index += 1) {
			if (fn.call(thisArg, iterable[index], index, iterable)) {
				return;
			}
		}
	} else if (isFunction(iterator.next)) {
		var _index = 0;
		while (_index < MAX_SAFE_INTEGER) {
			var _iterator$next = iterator.next(),
			    value = _iterator$next.value,
			    done = _iterator$next.done;

			if (done || fromIndex <= _index && fn.call(thisArg, value, _index, iterable)) {
				return;
			}
			_index += 1;
		}
	} else {
		var _index2 = fromIndex;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _value = _step.value;

				if (fn.call(thisArg, _value, _index2, iterable)) {
					return;
				}
				_index2 += 1;
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}
}

function parse(body) {
	var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();

	_forEach(trim(body).split('&'), function (data) {
		if (data) {
			var _data$split = data.split('='),
			    _data$split2 = _toArray(_data$split),
			    name = _data$split2[0],
			    parts = _data$split2.slice(1);

			name = decodeURIComponent(name.replace(/\+/g, ' '));
			parts = decodeURIComponent(parts.join('=').replace(/\+/g, ' '));
			form.append(name, parts);
		}
	});
	return form;
}

/* global window */
var w = window;
var _window = window,
    String$1 = _window.String;
var _window2 = window,
    Array = _window2.Array;
var _window3 = window,
    Object$1 = _window3.Object;
var _window4 = window,
    Date = _window4.Date;
var _window5 = window,
    parseInt = _window5.parseInt;
var _window6 = window,
    ArrayBuffer = _window6.ArrayBuffer;
var _window7 = window,
    DataView = _window7.DataView;
var _window8 = window,
    FormData = _window8.FormData;
var _window9 = window,
    setTimeout = _window9.setTimeout;
var _window10 = window,
    clearTimeout = _window10.clearTimeout;
var _window11 = window,
    decodeURIComponent = _window11.decodeURIComponent;
var _window12 = window,
    TypeError$1 = _window12.TypeError;
var _window13 = window,
    Uint8Array = _window13.Uint8Array;
var _window14 = window,
    Uint8ClampedArray = _window14.Uint8ClampedArray;
var _window15 = window,
    Uint16Array = _window15.Uint16Array;
var _window16 = window,
    Uint32Array = _window16.Uint32Array;
var _window17 = window,
    Int8Array = _window17.Int8Array;
var _window18 = window,
    Int16Array = _window18.Int16Array;
var _window19 = window,
    Int32Array = _window19.Int32Array;
var _window20 = window,
    Float32Array = _window20.Float32Array;
var _window21 = window,
    Float64Array = _window21.Float64Array;
var _window22 = window,
    XMLHttpRequest = _window22.XMLHttpRequest;
var _window23 = window,
    Promise$1 = _window23.Promise;
var _window24 = window,
    Blob = _window24.Blob;
var _window25 = window,
    FileReader = _window25.FileReader;


function isString(x) {
	return typeof x === 'string';
}

var hex = 16;

var SymbolRegistry = function () {
	function SymbolRegistry() {
		_classCallCheck(this, SymbolRegistry);

		this.seed = Date.now();
		this.registry = [];
	}

	_createClass(SymbolRegistry, [{
		key: 'get',
		value: function get() {
			var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var salt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

			var symbol = 'Symbol(' + key + ')' + (this.seed + this.registry.length).toString(hex);
			this.registry.push([symbol, '' + key + salt]);
			return symbol;
		}
	}, {
		key: 'for',
		value: function _for(key) {
			if (isString(key)) {
				var length = this.registry.length;

				for (var i = 0; i < length; i += 1) {
					var item = this.registry[i];
					if (key === item[1]) {
						return item[0];
					}
				}
				return this.get(key, '');
			}
			throw new TypeError$1('Symbol.for was called with non-string: ' + key);
		}
	}, {
		key: 'keyFor',
		value: function keyFor(sym) {
			var length = this.registry.length;

			for (var i = 0; i < length; i += 1) {
				var item = this.registry[i];
				if (sym === item[0]) {
					return item[1];
				}
			}
		}
	}, {
		key: 'Symbol',
		get: function get() {
			var _this = this;

			var fn = function fn(key) {
				return _this.get(key);
			};
			function define(key, value) {
				Object$1.defineProperty(fn, key, { value: value });
			}
			_forEach(['iterator', 'match', 'replace', 'search', 'split', 'hasInstance', 'isConcatSpreadable', 'unscopables', 'species', 'toPrimitive', 'toStringTag'], function (key) {
				define(key, fn(key));
			});
			define('for', function (key) {
				return _this.for(key);
			});
			define('keyFor', function (key) {
				return _this.keyFor(key);
			});
			return fn;
		}
	}]);

	return SymbolRegistry;
}();

var J0Symbol = new SymbolRegistry().Symbol;

if (!w.Symbol) {
	w.Symbol = J0Symbol;
}

function generator() {
	var _this2 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this2[index],
				done: length <= index++
			};
		}
	};
}

var prototype = Array.prototype;

if (!prototype[iteratorKey]) {
	prototype[iteratorKey] = generator;
}

var arrayPush = Array.prototype.push;

function push(arrayLike) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	return arrayPush.apply(arrayLike, args);
}

function noop(x) {
	return x;
}

function map(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = [];
	_forEach(iterable, function (value, index) {
		push(result, fn.call(thisArg, value, index, iterable));
	});
	return result;
}

if (!Array.from) {
	Array.from = map;
}

function join(iterable) {
	var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

	return map(iterable).join(separator);
}

function repeat(c) {
	var count = parseInt(c, 10);
	var results = [];
	for (var i = 0; i < count; i += 1) {
		push(results, this);
	}
	return join(results, '');
}

if (!String.prototype.repeat) {
	String.prototype.repeat = repeat;
}

// import postMessage from '../postMessage';
// import addEventListner from '../dom/addEventListener';
if (!w.immediateId) {
	w.immediateId = 0;
}
w.immediateId += 1;
var setImmediateNative = w.setImmediate;

var setImmediateAvailable = void 0;
// let firstImmediate = true;
// let immediateCount = 0;
// const tasks = {};
// const suffix = `_setImmediate${window.immediateId}`;

// function setImmediatePostMessage(fn) {
// 	if (firstImmediate) {
// 		firstImmediate = false;
// 		addEventListner(window, 'message', function ({data}) {
// 			if (data.split) {
// 				const [key] = data.split(suffix);
// 				const task = tasks[key];
// 				if (task) {
// 					task();
// 				}
// 				delete tasks[key];
// 			}
// 		});
// 	}
// 	immediateCount += 1;
// 	postMessage(`${immediateCount}${suffix}`, '*');
// 	tasks[immediateCount] = fn;
// 	return immediateCount;
// }

function setImmediateTimeout(fn) {
	return setTimeout(fn);
}

function testImmediate(fn, onSuccess) {
	var value = 1;
	var expected = (1 + 1) * 2;
	fn(function () {
		value *= 2;
		if (value === expected) {
			onSuccess();
		}
	});
	value += 1;
}

setImmediateAvailable = setImmediateTimeout;
setTimeout(function () {
	// if (postMessage) {
	// 	testImmediate(setImmediatePostMessage, function () {
	// 		if (setImmediateAvailable !== setImmediateNative) {
	// 			setImmediateAvailable = setImmediatePostMessage;
	// 		}
	// 	});
	// }
	if (setImmediateNative) {
		testImmediate(setImmediateNative, function () {
			setImmediateAvailable = setImmediateNative;
		});
	}
});

var setImmediate = function setImmediate(fn) {
	return setImmediateAvailable(fn);
};

/* eslint-disable no-underscore-dangle */
var PENDING = 0;
var RESOLVED = 1;
var REJECTED = 2;
var CHAINED = 3;

var Deferred = function Deferred() {
	var onResolved = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var onRejected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	_classCallCheck(this, Deferred);

	/* eslint-disable no-use-before-define */
	this.promise = new J0Promise(noop);
	/* eslint-enable no-use-before-define */
	this.onResolved = onResolved;
	this.onRejected = onRejected;
};

var J0Promise = function () {
	function J0Promise(fn) {
		_classCallCheck(this, J0Promise);

		this.deferreds = [];
		this.state = PENDING;
		this.exec(fn);
	}

	_createClass(J0Promise, [{
		key: 'is',
		value: function is(state) {
			return this.state === state;
		}
	}, {
		key: 'exec',
		value: function exec(fn) {
			var _this3 = this;

			var done = false;
			var onResolve = function onResolve(value) {
				if (done) {
					return;
				}
				done = true;
				_this3.resolve(value);
			};
			var onReject = function onReject(error) {
				if (done) {
					return;
				}
				done = true;
				_this3.reject(error);
			};
			try {
				fn(onResolve, onReject);
			} catch (error) {
				onReject(error);
			}
		}
	}, {
		key: 'resolve',
		value: function resolve(value) {
			try {
				if (value === this) {
					throw new TypeError$1('A promise cannot be resolved with itself');
				}
				this.value = value;
				if (isThennable(value)) {
					this.state = CHAINED;
					this.exec(function (resolve, reject) {
						value.then(resolve, reject);
					});
				} else {
					this.state = RESOLVED;
				}
				this.finish();
			} catch (error) {
				this.reject(error);
			}
		}
	}, {
		key: 'reject',
		value: function reject(error) {
			this.state = REJECTED;
			this.value = error;
			this.finish();
		}
	}, {
		key: 'finish',
		value: function finish() {
			var _this4 = this;

			_forEach(this.deferreds, function (deferred) {
				_this4.handle(deferred);
			});
			this.deferreds = null;
		}
	}, {
		key: 'handle',
		value: function handle(deferred) {
			/* eslint-disable consistent-this */
			var self = this;
			/* eslint-enable consistent-this */
			while (self.is(CHAINED)) {
				self = self.value;
			}
			if (self.is(PENDING)) {
				push(self.deferreds, deferred);
				return;
			}
			setImmediate(function () {
				var promise = deferred.promise,
				    _deferred$onResolved = deferred.onResolved,
				    onResolved = _deferred$onResolved === undefined ? null : _deferred$onResolved,
				    _deferred$onRejected = deferred.onRejected,
				    onRejected = _deferred$onRejected === undefined ? null : _deferred$onRejected;

				var resolved = self.is(RESOLVED);
				var callback = resolved ? onResolved : onRejected;
				if (callback === null) {
					if (resolved) {
						promise.resolve(self.value);
					} else {
						promise.reject(self.value);
					}
					return;
				}
				var value = void 0;
				try {
					value = callback(self.value);
				} catch (error) {
					promise.reject(error);
					return;
				}
				promise.resolve(value);
			});
		}
	}, {
		key: 'catch',
		value: function _catch(onRejected) {
			return this.then(null, onRejected);
		}
	}, {
		key: 'then',
		value: function then(onResolved, onRejected) {
			var deferred = new Deferred(onResolved, onRejected);
			this.handle(deferred);
			return deferred.promise;
		}
	}], [{
		key: 'resolve',
		value: function resolve(value) {
			if (isThennable(value)) {
				return value;
			}
			return new J0Promise(function (resolve) {
				resolve(value);
			});
		}
	}, {
		key: 'reject',
		value: function reject(error) {
			return new J0Promise(function (resolve, reject) {
				reject(error);
			});
		}
	}, {
		key: 'race',
		value: function race(promises) {
			return new J0Promise(function (resolve, reject) {
				_forEach(promises, function (promise) {
					promise.then(resolve, reject);
				});
			});
		}
	}, {
		key: 'all',
		value: function all(values) {
			return new J0Promise(function (resolve, reject) {
				var length = values.length;

				if (length === 0) {
					resolve([]);
					return;
				}
				var remaining = length;
				function check(value, index) {
					if (isThennable(value)) {
						value.then(function (value2) {
							check(value2, index);
						}, reject);
						return;
					}
					values[index] = value;
					remaining -= 1;
					if (remaining === 0) {
						resolve(values);
					}
				}
				_forEach(values, function (value, index) {
					check(value, index);
				});
			});
		}
	}]);

	return J0Promise;
}();

function isThennable(value) {
	return value && isFunction(value.then) && isFunction(value.catch);
}

w.Promise = w.Promise || J0Promise;

function find(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = void 0;
	_forEach(iterable, function (item, index) {
		if (fn.call(thisArg, item, index, iterable)) {
			result = item;
			return true;
		}
	});
	return result;
}

function find$2(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = -1;
	_forEach(iterable, function (item, index) {
		if (fn.call(thisArg, item, index, iterable)) {
			result = index;
			return true;
		}
	});
	return result;
}

function splice(array) {
	for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		args[_key2 - 1] = arguments[_key2];
	}

	return array.splice.apply(array, args);
}

var Map$1 = function () {
	function Map$1(iterable) {
		var _this5 = this;

		_classCallCheck(this, Map$1);

		this.clear();
		if (iterable) {
			_forEach(iterable, function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2),
				    key = _ref2[0],
				    value = _ref2[1];

				_this5.set(key, value);
			});
		}
	}

	_createClass(Map$1, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOfKey',
		value: function indexOfKey(key) {
			return find$2(this.data, function (_ref3) {
				var _ref4 = _slicedToArray(_ref3, 1),
				    itemKey = _ref4[0];

				return itemKey === key;
			});
		}
	}, {
		key: 'has',
		value: function has(key) {
			return 0 <= this.indexOfKey(key);
		}
	}, {
		key: 'set',
		value: function set(key, value) {
			var index = this.indexOfKey(key);
			if (0 <= index) {
				this.data[index][1] = value;
			} else {
				push(this.data, [key, value]);
			}
			return this;
		}
	}, {
		key: 'get',
		value: function get(key) {
			var found = find(this.data, function (_ref5) {
				var _ref6 = _slicedToArray(_ref5, 1),
				    itemKey = _ref6[0];

				return itemKey === key;
			});
			if (found) {
				return found[1];
			}
		}
	}, {
		key: 'delete',
		value: function _delete(key) {
			var index = this.indexOfKey(key);
			if (0 <= index) {
				splice(this.data, index, 1);
				return true;
			}
			return false;
		}
	}, {
		key: 'entries',
		value: function entries() {
			return this.data[Symbol.iterator]();
		}
	}, {
		key: 'forEach',
		value: function forEach(fn, thisArg) {
			_forEach(this.data, fn, thisArg);
		}
	}, {
		key: 'keys',
		value: function keys() {
			var iterator = this.entries();
			return {
				next: function next() {
					var _iterator$next2 = iterator.next(),
					    value = _iterator$next2.value,
					    done = _iterator$next2.done;

					return {
						value: value && value[0],
						done: done
					};
				}
			};
		}
	}, {
		key: 'values',
		value: function values() {
			var iterator = this.entries();
			return {
				next: function next() {
					var _iterator$next3 = iterator.next(),
					    value = _iterator$next3.value,
					    done = _iterator$next3.done;

					return {
						value: value && value[1],
						done: done
					};
				}
			};
		}
	}, {
		key: 'size',
		get: function get() {
			return this.data.length;
		}
	}]);

	return Map$1;
}();

var MAP = w.Map;

if (!MAP || !(new MAP([[0, 0]]).size === 1) || !MAP.prototype.forEach) {
	MAP = Map$1;
}

w.Map = MAP;

function generator$2() {
	return this.entries();
}

if (!Map.prototype[iteratorKey]) {
	Map.prototype[iteratorKey] = generator$2;
}

var Set = function () {
	function Set(iterable) {
		var _this6 = this;

		_classCallCheck(this, Set);

		this.clear();
		if (iterable) {
			_forEach(iterable, function (value) {
				_this6.add(value);
			});
		}
	}

	_createClass(Set, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOf',
		value: function indexOf(item) {
			return this.data.indexOf(item);
		}
	}, {
		key: 'has',
		value: function has(item) {
			return 0 <= this.indexOf(item);
		}
	}, {
		key: 'add',
		value: function add(item) {
			if (!this.has(item)) {
				push(this.data, item);
			}
			return this;
		}
	}, {
		key: 'delete',
		value: function _delete(item) {
			var index = this.indexOf(item);
			if (0 <= index) {
				splice(this.data, index, 1);
			}
			return 0 <= index;
		}
	}, {
		key: 'forEach',
		value: function forEach(fn, thisArg) {
			var _this7 = this;

			_forEach(this.data, function (value) {
				fn.call(thisArg, value, value, _this7);
			});
		}
	}, {
		key: 'values',
		value: function values() {
			return this.data[iteratorKey]();
		}
	}, {
		key: iteratorKey,
		value: function value() {
			return this.values();
		}
	}, {
		key: 'entries',
		value: function entries() {
			var iterator = this.values();
			return {
				next: function next() {
					var _iterator$next4 = iterator.next(),
					    value = _iterator$next4.value,
					    done = _iterator$next4.done;

					return {
						value: !done && [value, value],
						done: done
					};
				}
			};
		}
	}, {
		key: 'size',
		get: function get() {
			return this.data.length;
		}
	}]);

	return Set;
}();

var SET = w.Set;

if (!SET || !(new SET([0]).size === 1) || !SET.prototype.forEach) {
	SET = Set;
}

w.Set = SET;

function generator$4() {
	var _this8 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this8[index],
				done: length <= index++
			};
		}
	};
}

if (!NodeList.prototype[iteratorKey]) {
	NodeList.prototype[iteratorKey] = generator$4;
}

function generator$6() {
	var _this9 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this9[index],
				done: length <= index++
			};
		}
	};
}

if (!HTMLCollection.prototype[iteratorKey]) {
	HTMLCollection.prototype[iteratorKey] = generator$6;
}

function generator$8() {
	var _this10 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this10[index],
				done: length <= index++
			};
		}
	};
}

if (!NamedNodeMap.prototype[iteratorKey]) {
	NamedNodeMap.prototype[iteratorKey] = generator$8;
}

function filter(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = [];
	_forEach(iterable, function (value, index, iterable2) {
		if (fn.call(thisArg, value, index, iterable2)) {
			push(result, value);
		}
	});
	return result;
}

var StringList = function () {
	function StringList(iterable) {
		var _this11 = this;

		_classCallCheck(this, StringList);

		this.clear();
		if (iterable) {
			map(iterable, function (_ref7) {
				var _ref8 = _slicedToArray(_ref7, 2),
				    key = _ref8[0],
				    value = _ref8[1];

				_this11.append(key, value);
			});
		}
	}

	_createClass(StringList, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOf',
		value: function indexOf(name) {
			return find$2(this.data, function (_ref9) {
				var _ref10 = _slicedToArray(_ref9, 1),
				    itemName = _ref10[0];

				return itemName === name;
			});
		}
	}, {
		key: 'has',
		value: function has(name) {
			return 0 <= this.indexOf(name);
		}
	}, {
		key: 'append',
		value: function append(name, value) {
			push(this.data, [name, value]);
		}
	}, {
		key: 'set',
		value: function set(name, value) {
			var index = this.indexOf(name);
			if (index < 0) {
				this.append(name, value);
			} else {
				this.data[index][1] = value;
			}
		}
	}, {
		key: 'delete',
		value: function _delete(name) {
			this.data = filter(this.data, function (_ref11) {
				var _ref12 = _slicedToArray(_ref11, 1),
				    itemName = _ref12[0];

				return itemName !== name;
			});
		}
	}, {
		key: 'get',
		value: function get(name) {
			var found = find(this.data, function (_ref13) {
				var _ref14 = _slicedToArray(_ref13, 1),
				    itemName = _ref14[0];

				return itemName === name;
			});
			return found ? found[1] : null;
		}
	}, {
		key: 'getAll',
		value: function getAll(name) {
			var result = [];
			_forEach(this.data, function (_ref15) {
				var _ref16 = _slicedToArray(_ref15, 2),
				    itemName = _ref16[0],
				    value = _ref16[1];

				if (itemName === name) {
					push(result, value);
				}
			});
			return result;
		}
	}, {
		key: 'toString',
		value: function toString() {
			return map(this.data, function (_ref17) {
				var _ref18 = _slicedToArray(_ref17, 2),
				    name = _ref18[0],
				    _ref18$ = _ref18[1],
				    value = _ref18$ === undefined ? '' : _ref18$;

				return name + ':' + value;
			}).join(',');
		}
	}, {
		key: 'entries',
		value: function entries() {
			return this.data[iteratorKey]();
		}
	}, {
		key: 'values',
		value: function values() {
			var iterator = this.entries();
			return {
				next: function next() {
					var _iterator$next5 = iterator.next(),
					    value = _iterator$next5.value,
					    done = _iterator$next5.done;

					return {
						value: value && value[1],
						done: done
					};
				}
			};
		}
	}, {
		key: iteratorKey,
		value: function value() {
			return this.entries();
		}
	}]);

	return StringList;
}();

var separator = '&';
var equal = '=';

var URLSearchParams$2 = function (_StringList) {
	_inherits(URLSearchParams$2, _StringList);

	function URLSearchParams$2(init) {
		_classCallCheck(this, URLSearchParams$2);

		return _possibleConstructorReturn(this, (URLSearchParams$2.__proto__ || Object.getPrototypeOf(URLSearchParams$2)).call(this, init ? map(init.replace(/^\?/, '').split(separator), function (entry) {
			return entry.split(equal);
		}) : null));
	}

	_createClass(URLSearchParams$2, [{
		key: 'toString',
		value: function toString() {
			return map(this.data, function (_ref19) {
				var _ref20 = _slicedToArray(_ref19, 2),
				    name = _ref20[0],
				    _ref20$ = _ref20[1],
				    value = _ref20$ === undefined ? '' : _ref20$;

				return name + '=' + value;
			}).join('&');
		}
	}]);

	return URLSearchParams$2;
}(StringList);

var URLSearchParams$1 = w.URLSearchParams;

if (!(URLSearchParams$1 && new URLSearchParams$1('?a=b').has('a'))) {
	w.URLSearchParams = URLSearchParams$2;
}

function forEachKey(obj, fn, thisArg) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (fn.call(thisArg, obj[key], key, obj)) {
				return;
			}
		}
	}
}

function toLowerCase(string) {
	return ('' + string).toLowerCase();
}

var Headers$1 = function (_StringList2) {
	_inherits(Headers$1, _StringList2);

	function Headers$1(headers) {
		_classCallCheck(this, Headers$1);

		var init = [];
		if (headers) {
			forEachKey(headers, function (value, key) {
				push(init, [key, value]);
			});
		}
		return _possibleConstructorReturn(this, (Headers$1.__proto__ || Object.getPrototypeOf(Headers$1)).call(this, init));
	}

	_createClass(Headers$1, [{
		key: 'indexOf',
		value: function indexOf(name) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'indexOf', this).call(this, toLowerCase(name));
		}
	}, {
		key: 'has',
		value: function has(name) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'has', this).call(this, toLowerCase(name));
		}
	}, {
		key: 'append',
		value: function append(name, value) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'append', this).call(this, toLowerCase(name), value);
		}
	}, {
		key: 'set',
		value: function set(name, value) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'set', this).call(this, toLowerCase(name), value);
		}
	}, {
		key: 'delete',
		value: function _delete(name) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'delete', this).call(this, toLowerCase(name));
		}
	}, {
		key: 'get',
		value: function get(name) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'getAll', this).call(this, toLowerCase(name)).join(',');
		}
	}, {
		key: 'entries',
		value: function entries() {
			var _this14 = this;

			var iterator = _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'entries', this).call(this);
			var history = [];
			return {
				next: function next() {
					while (1) {
						var _iterator$next6 = iterator.next(),
						    value = _iterator$next6.value,
						    done = _iterator$next6.done;

						var key = value && value[0];
						if (done || history.indexOf(key) < 0) {
							push(history, key);
							return {
								value: [key, _this14.get(key)],
								done: done
							};
						}
					}
				}
			};
		}
	}]);

	return Headers$1;
}(StringList);

if (!w.Headers) {
	w.Headers = Headers$1;
}

function isUndefined(x) {
	return typeof x === 'undefined';
}

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

var viewClasses = [Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];
function isArrayBufferView(obj) {
	return 0 <= find$2(viewClasses, function (constructor) {
		return isInstanceOf(obj, constructor);
	});
}

var parseAsJSON = JSON.parse;

var baseMask = 0x3f;
var lastMasks = [baseMask, 0x7f, 0x1f, 0xf, 0x7, 0x3, 0x1];
var availableBits = 6;

/* eslint-disable no-bitwise */
function consume(view, index, length) {
	var lastMask = lastMasks[length];
	var charCode = 0;
	var i = 0;
	while (0 < length--) {
		var mask = length === 0 ? lastMask : baseMask;
		var shiftSize = availableBits * i++;
		charCode |= (view[index + length] & mask) << shiftSize;
	}
	return String$1.fromCharCode(charCode);
}
/* eslint-enable no-bitwise */

function arrayBufferToString(arrayBuffer) {
	var view = new Uint8Array(arrayBuffer);
	var chars = [];
	for (var i = 0; i < view.length; i++) {
		var byte = view[i];
		var length = void 0;
		if (byte < 0x80) {
			length = 1;
		} else if (byte < 0xe0) {
			length = 2;
		} else if (byte < 0xf0) {
			length = 3;
		} else if (byte < 0xf8) {
			length = 4;
		} else if (byte < 0xfc) {
			length = 5;
		} else {
			length = 6;
		}
		push(chars, consume(view, i, length));
		i += length - 1;
	}
	return chars.join('');
}

function cloneBuffer(buf) {
	if (buf.slice) {
		return buf.slice(0);
	}
	var view = new Uint8Array(buf.byteLength);
	view.set(new Uint8Array(buf));
	return view.buffer;
}

var Body = function () {
	function Body() {
		_classCallCheck(this, Body);

		this.bodyUsed = false;
	}

	_createClass(Body, [{
		key: 'initBody',
		value: function initBody(body) {
			this.bodyInit = body;
			if (!body) {
				this.bodyText = '';
			} else if (isString(body)) {
				this.bodyText = body;
			} else if (isInstanceOf(body, Blob)) {
				this.bodyBlob = body;
			} else if (isInstanceOf(body, FormData)) {
				this.bodyFormData = body;
			} else if (isInstanceOf(body, URLSearchParams)) {
				this.bodyText = body.toString();
			} else if (isInstanceOf(body, DataView)) {
				this.bodyArrayBuffer = cloneBuffer(body.buffer);
				// IE 10-11 can't handle a DataView body.
				this.bodyInit = new Blob([this.bodyArrayBuffer]);
			} else if (isInstanceOf(body, ArrayBuffer) || isArrayBufferView(body)) {
				this.bodyArrayBuffer = cloneBuffer(body);
			} else {
				throw new Error('unsupported BodyInit type');
			}
			if (!this.headers.get('content-type')) {
				if (isString(body)) {
					this.headers.set('content-type', 'text/plain;charset=UTF-8');
				} else if (this.bodyBlob && this.bodyBlob.type) {
					this.headers.set('content-type', this.bodyBlob.type);
				} else if (body instanceof URLSearchParams) {
					this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
				}
			}
		}
	}, {
		key: 'arrayBuffer',
		value: function arrayBuffer() {
			if (this.bodyArrayBuffer) {
				return this.isUsed || Promise$1.resolve(this.bodyArrayBuffer);
			}
			return this.blob().then(function (blob) {
				return readBlob$$1(blob, 'ArrayBuffer');
			});
		}
	}, {
		key: 'blob',
		value: function blob() {
			var rejected = this.isUsed;
			if (rejected) {
				return rejected;
			}
			if (this.bodyBlob) {
				return Promise$1.resolve(this.bodyBlob);
			} else if (this.bodyArrayBuffer) {
				return Promise$1.resolve(new Blob([this.bodyArrayBuffer]));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as blob');
			} else {
				return Promise$1.resolve(new Blob([this.bodyText]));
			}
		}
	}, {
		key: 'text',
		value: function text() {
			var rejected = this.isUsed;
			if (rejected) {
				return rejected;
			}
			if (this.bodyBlob) {
				return readBlob$$1(this.bodyBlob, 'Text');
			} else if (this.bodyArrayBuffer) {
				return Promise$1.resolve(arrayBufferToString(this.bodyArrayBuffer));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as text');
			} else {
				return Promise$1.resolve(this.bodyText);
			}
		}
	}, {
		key: 'formData',
		value: function formData() {
			return this.text().then(parse);
		}
	}, {
		key: 'json',
		value: function json() {
			return this.text().then(parseAsJSON);
		}
	}, {
		key: 'isUsed',
		get: function get() {
			if (this.bodyUsed) {
				return Promise$1.reject(new TypeError$1('Already used'));
			}
			this.bodyUsed = true;
		}
	}]);

	return Body;
}();

var Request = function (_Body) {
	_inherits(Request, _Body);

	function Request(input) {
		var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Request);

		var body = init.body;

		var _this15 = _possibleConstructorReturn(this, (Request.__proto__ || Object.getPrototypeOf(Request)).call(this));

		if (input instanceof Request) {
			body = _this15.inheritFrom(input, body, init);
		} else {
			_this15.url = '' + input;
		}
		_this15.credentials = init.credentials || _this15.credentials || 'omit';
		if (init.headers || !_this15.headers) {
			_this15.headers = new Headers$1(init.headers);
		}
		_this15.method = (init.method || _this15.method || 'GET').toUpperCase();
		_this15.mode = init.mode || _this15.mode || null;
		_this15.referrer = null;
		if ((_this15.method === 'GET' || _this15.method === 'HEAD') && body) {
			throw new TypeError('Body not allowed for GET or HEAD requests');
		}
		_this15.initBody(body);
		return _this15;
	}

	_createClass(Request, [{
		key: 'inheritFrom',
		value: function inheritFrom(input, body, _ref21) {
			var headers = _ref21.headers;

			if (input.bodyUsed) {
				throw new TypeError('Already read');
			}
			this.url = input.url;
			this.credentials = input.credentials;
			if (!headers) {
				this.headers = new Headers$1(input.headers);
			}
			this.method = input.method;
			this.mode = input.mode;
			if (!body && input.bodyInit !== null) {
				body = input.bodyInit;
				input.bodyUsed = true;
			}
			return body;
		}
	}, {
		key: 'clone',
		value: function clone() {
			return new Request(this, { body: this.bodyInit });
		}
	}]);

	return Request;
}(Body);

var minOkStatus = 200;
var maxOkStatus = 300;
var redirectStatuses = [301, 302, 303, 307, 308];

var Response = function (_Body2) {
	_inherits(Response, _Body2);

	function Response(body) {
		var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Response);

		var _this16 = _possibleConstructorReturn(this, (Response.__proto__ || Object.getPrototypeOf(Response)).call(this));

		_this16.type = 'default';
		_this16.status = 'status' in init ? init.status : minOkStatus;
		_this16.ok = _this16.status >= minOkStatus && _this16.status < maxOkStatus;
		_this16.statusText = 'statusText' in init ? init.statusText : 'OK';
		_this16.headers = new Headers$1(init.headers);
		_this16.url = init.url || '';
		_this16.initBody(body);
		return _this16;
	}

	_createClass(Response, [{
		key: 'clone',
		value: function clone() {
			return new Response(this.bodyInit, {
				status: this.status,
				statusText: this.statusText,
				headers: new Headers$1(this.headers),
				url: this.url
			});
		}
	}, {
		key: 'redirect',
		value: function redirect(url, status) {
			if (redirectStatuses.indexOf(status) < 0) {
				throw new RangeError('Invalid status code');
			}
			return new Response(null, {
				status: status,
				headers: { location: url }
			});
		}
	}], [{
		key: 'error',
		value: function error() {
			var response = new Response(null, {
				status: 0,
				statusText: ''
			});
			response.type = 'error';
			return response;
		}
	}]);

	return Response;
}(Body);

function parse$1(rawHeaders) {
	var headers = new Headers();
	// Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	// https://tools.ietf.org/html/rfc7230#section-3.2
	var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/, ' ');
	preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
		var _line$split = line.split(':'),
		    _line$split2 = _toArray(_line$split),
		    key = _line$split2[0],
		    parts = _line$split2.slice(1);

		if (key) {
			headers.append(trim(key), trim(parts.join(':')));
		}
	});
	return headers;
}

function fetch$1(input, init) {
	return new Promise$1(function (resolve, reject) {
		var request = new Request(input, init);
		var xhr = new XMLHttpRequest();
		xhr.onload = function () {
			var options = {
				status: xhr.status,
				statusText: xhr.statusText,
				headers: parse$1(xhr.getAllResponseHeaders() || '')
			};
			options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
			var body = 'response' in xhr ? xhr.response : xhr.responseText;
			resolve(new Response(body, options));
		};
		xhr.onerror = function () {
			reject(new TypeError('Network request failed'));
		};
		xhr.ontimeout = function () {
			reject(new TypeError('Network request failed'));
		};
		xhr.open(request.method, request.url, true);
		if (request.credentials === 'include') {
			xhr.withCredentials = true;
		}
		xhr.responseType = 'blob';
		_forEach(request.headers, function (_ref22) {
			var _ref23 = _slicedToArray(_ref22, 2),
			    name = _ref23[0],
			    value = _ref23[1];

			xhr.setRequestHeader(name, value);
		});
		xhr.send(isUndefined(request.bodyInit) ? null : request.bodyInit);
	});
}

// if (!window.fetch) {
// 	window.fetch = j0Fetch;
// }
w.fetch = fetch$1;

if (!w.Body) {
	w.Body = Body;
}

if (!w.Response) {
	w.Response = Response;
}

if (!w.Request) {
	w.Request = Request;
}

w.requestAnimationFrame = w.requestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || function (fn) {
	return setTimeout(function () {
		fn(Date.now());
	}, 30);
};

w.cancelAnimationFrame = w.cancelAnimationFrame || w.mozCancelAnimationFrame || function (id) {
	return clearTimeout(id);
};

w.global = w;
}())
