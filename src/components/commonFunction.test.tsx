import { PbdModuleString } from "../models/pbdModuleString";
import CommonFunction from "./commonFunction";

it("Should return the shared functions of a specific app", () => {
  // Arrange
  const app = PbdModuleString.AbsencePlanner;

  // Act
  const result = CommonFunction({ app });

  // Assert
  expect(result).
  
});
