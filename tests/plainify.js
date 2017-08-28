'use strict';

QUnit.module('Тестируем функцию plainify', function () {
	QUnit.test('plainify работает правильно', function (assert) {
		assert.deepEqual(plainify({foo: 'bar', baz: 42}), {'foo': 'bar', 'baz': 42});

		const nested1 = {
			deep: {
				foo: 'bar',
				baz: 42
			}
		};

		const plain1 = {
			'deep.foo': 'bar',
			'deep.baz': 42
		};

		assert.deepEqual(plainify(nested1), plain1);

		const nested2 = {
			deep: {
				foobar: 0,
				nested: {
					object: {
						fields: {
							foo: 42,
							bar: 42,
							baz: 42,
						}
					}
				}
			}
		};

		const plain2 = {
			'deep.foobar': 0,
			'deep.nested.object.fields.foo': 42,
			'deep.nested.object.fields.bar': 42,
			'deep.nested.object.fields.baz': 42
		};

		assert.deepEqual(plainify(nested2), plain2);
		
		const nested3 = {
			property: 'work',
			deep: {
				foo: 'bar',
				baz: 42
			}
		};
		
		const plain3 = {
			'property': 'work',
			'deep.foo': 'bar',
			'deep.baz': 42
		};
		
		assert.deepEqual(plainify(nested3), plain3);
		
		const nested4 = {
			property: 'work',
			deep: {
				foo: 'bar',
				baz: 42
			},
			property1: 'work1'
		};
		
		const plain4 = {
			'property': 'work',
			'deep.foo': 'bar',
			'deep.baz': 42,
			'property1': 'work1'
		};
		
		assert.deepEqual(plainify(nested4), plain4);
		
	});
});
