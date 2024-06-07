import { OperationHandlerTestSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerTest';
import { OperationHandlerResult } from '@trayio/cdk-dsl/connector/operation/OperationHandler';
import { retrieveASpecificNoteHandler } from './handler';
import '@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner';

OperationHandlerTestSetup.configureHandlerTest(retrieveASpecificNoteHandler, (handlerTest) =>
	handlerTest
		.usingHandlerContext('test')
		.nothingBeforeAll()
		.testCase('should retrieve a specific note', (testCase) =>
			testCase
				.givenNothing()
				.when(() => ({ id: 40340269 }))
				.then(({ output }) => {
					const outputValue =
						OperationHandlerResult.getSuccessfulValueOrFail(output);
					// Add any additional assertions based on expected output structure
					expect(outputValue).toHaveProperty('data');
				})
				.finallyDoNothing()
		)
		.nothingAfterAll()
);